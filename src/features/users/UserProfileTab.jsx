import { useSelector } from 'react-redux';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import UpdateUserForm from './UpdateUserForm';
import ChangePasswordForm from './ChangePasswordForm';

function UserProfileTab() {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-primary">My profile</h1>

      <div className="min-h-[30rem] w-full rounded-[1rem] border-[3px] border-border-light bg-white p-4">
        <Tabs value="Update profile" id="custom-animation">
          <TabsHeader className="h-14 w-full bg-bg-light">
            <Tab className="" key="Update profile" value="Update profile">
              Update profile
            </Tab>

            <Tab className="" key="Change password" value="Change password">
              Change password
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 10 },
              mount: { y: 0 },
              unmount: { y: 10 },
            }}
          >
            <TabPanel key="Update profile" value="Update profile">
              <div className="mt-4 flex w-full items-center justify-center self-center">
                <div className="w-[37rem]">
                  <UpdateUserForm
                    user={currentUser}
                    me={true}
                    title="Update profile"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel key="Change password" value="Change password">
              <div className="mt-4 flex w-full items-center justify-center self-center">
                <div className="w-[30rem]">
                  <ChangePasswordForm user={currentUser} />
                </div>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default UserProfileTab;
