import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import secureLocalStorage from 'react-secure-storage';
import authService from 'src/services/AuthService';
import { toast } from 'react-toastify';
import { AuthErrorToastMsg } from 'src/utils/AuthErrorToastMsg';

const initialState = {
  currentUser: secureLocalStorage.getItem('currentUser') || null,
  loading: false,
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const { user: currentUser } = await authService.login(data);
    toast.success('You are successfully logged in')

    secureLocalStorage.setItem('currentUser', currentUser)
    return currentUser;
  } catch (error) {
    console.log(error);
    AuthErrorToastMsg(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
})


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      secureLocalStorage.removeItem('currentUser')
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    }).addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loading = false;
    }).addCase(login.rejected, (state) => {
      state.loading = false;
    })

  }
});

export const { logout } = authSlice.actions
export default authSlice.reducer;
