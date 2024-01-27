import Sidebar from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className='flex '>
      {/* Left side - Header */}
      <div className='w-1/5 m-3'>
        <Sidebar />
      </div>

      {/* Right side - Main content */}
      <div className='w-4/5 flex flex-col '>{children}</div>
    </div>
  );
};

export default Layout;
