import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';
import authService from 'src/services/AuthService';
import { toast } from 'react-toastify';
import { AuthErrorToastMsg } from 'src/utils/AuthErrorToastMsg';

const initialState = {
  currentUser: secureLocalStorage.getItem('currentUser') || null,
  loading: false,
};

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    let currentUser;
    if (data) {
      currentUser = await authService.login(data);
    } else {
      currentUser = await authService.signInWithGmail();
    }

    toast.success('You are successfully logged in');

    currentUser = {
      ...currentUser,
      birthDay: currentUser.birthDay.toDate().toLocaleDateString('en-GB'),
    };

    secureLocalStorage.setItem('currentUser', currentUser);
    return currentUser;
  } catch (error) {
    console.log(error);
    AuthErrorToastMsg(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await authService.logout();
    secureLocalStorage.removeItem('currentUser');
    toast.success('Signed out successfully.');
  } catch (error) {
    AuthErrorToastMsg(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })

      // logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
      });
  },
});

// export const { logout } = authSlice.actions;
export default authSlice.reducer;
