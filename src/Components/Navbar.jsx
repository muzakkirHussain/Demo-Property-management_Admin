// import React, { useEffect, useState } from 'react';
// import './Navbar/Navbar.scss';
// import { useLocation, useNavigate } from 'react-router-dom';
// import homeSelected from '../assets/Navbar/selected/solace_nav_selected-1.svg';
// import solaceLogo from '../assets/Navbar/Solace_Logo.svg';
// import propertiesSelected from '../assets/Navbar/selected/solace_nav_selected-2.svg';
// import contactsSelected from '../assets/Navbar/selected/solace_nav_selected-3.svg';
// import tenanciesSelected from '../assets/Navbar/selected/solace_nav_selected-4.svg';
// import progressionsSelected from '../assets/Navbar/selected/solace_nav_selected-5.svg';
// import accountsSelected from '../assets/Navbar/selected/solace_nav_selected-6.svg';
// import eSignatureSelected from '../assets/Navbar/selected/solace_nav_selected-7.svg';
// import bulkUploadSelected from '../assets/Navbar/selected/solace_nav_selected-8.svg';
// import reportSelected from '../assets/Navbar/selected/solace_nav_selected-9.svg';
// import toolsSelected from '../assets/Navbar/selected/solace_nav_selected-10.svg';
// import homeUnselected from '../assets/Navbar/unselected/solace_nav_unselected-1.svg';
// import propertiesUnselected from '../assets/Navbar/unselected/solace_nav_unselected-2.svg';
// import contactsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-3.svg';
// import tenanciesUnselected from '../assets/Navbar/unselected/solace_nav_unselected-4.svg';
// import progressionsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-5.svg';
// import accountsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-6.svg';
// import eSignatureUnselected from '../assets/Navbar/unselected/solace_nav_unselected-7.svg';
// import bulkUploadUnselected from '../assets/Navbar/unselected/solace_nav_unselected-8.svg';
// import reportUnselected from '../assets/Navbar/unselected/solace_nav_unselected-9.svg';
// import toolsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-10.svg';
// import downArrow from '../assets/Navbar/downArrow.svg';
// import upArrow from '../assets/Navbar/upArrow.svg';

// import { useStore } from '../Store/Store';

// function Navbar() {
//   const [selected, setSelected] = useState(0);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeElement, setActiveElement] = useState('');
//   const navData = [
//     {
//       id: 1,
//       title: 'Home',
//       selected_image: homeSelected,
//       unSelected_image: homeUnselected,
//       url: '/',
//     },
//     {
//       id: 2,
//       title: 'Properties',
//       selected_image: propertiesSelected,
//       unSelected_image: propertiesUnselected,
//       url: '/properties',
//       subDrop: [],
//     },
//     {
//       id: 3,
//       title: 'Contacts',
//       selected_image: contactsSelected,
//       unSelected_image: contactsUnselected,
//       url: '/contacts',
//       subDrop: [
//         {
//           id: 11,
//           title: 'My Contacts',
//           selected_image: contactsSelected,
//           unSelected_image: contactsUnselected,
//           url: '/contacts',
//         },
//         {
//           id: 12,
//           title: 'Groups',
//           selected_image: contactsSelected,
//           unSelected_image: contactsUnselected,
//           url: '/contacts',
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: 'Tenancies',
//       selected_image: tenanciesSelected,
//       unSelected_image: tenanciesUnselected,
//       url: '/tenancies',
//       subDrop: [],
//     },
//     {
//       id: 5,
//       title: 'Progressions',
//       selected_image: progressionsSelected,
//       unSelected_image: progressionsUnselected,
//       url: '/progressions',
//     },
//     {
//       id: 6,
//       title: 'Accounts',
//       selected_image: accountsSelected,
//       unSelected_image: accountsUnselected,
//       url: '/accounts',
//       subDrop: [],
//     },
//     {
//       id: 7,
//       title: 'E-Signature',
//       selected_image: eSignatureSelected,
//       unSelected_image: eSignatureUnselected,
//       url: '/e-signature',
//       subDrop: [],
//     },
//     {
//       id: 8,
//       title: 'Bulk Upload',
//       selected_image: bulkUploadSelected,
//       unSelected_image: bulkUploadUnselected,
//       url: '/bulk-upload',
//     },
//     {
//       id: 9,
//       title: 'Report',
//       selected_image: reportSelected,
//       unSelected_image: reportUnselected,
//       url: '/report',
//     },
//     {
//       id: 10,
//       title: 'Tools',
//       selected_image: toolsSelected,
//       unSelected_image: toolsUnselected,
//       url: '/tools',
//       // subDrop: [],
//     },
//   ];
//   const { setUser, setToken } = useStore((state) => ({
//     user: state.user,
//     setUser: state.setUser,
//     setToken: state.setToken,
//   }));

//   useEffect(() => {
//     const pathParts = location.pathname.split('/');
//     const firstPart = pathParts[1];
//     const foundItem = navData.find(
//       (item) => firstPart === item.url.split('/')[1]
//     );
//     if (foundItem) {
//       setSelected(foundItem.id - 1);
//     } else {
//       setSelected(null);
//     }
//   }, [location]);

//   return (
//     <div className="sideBar">
//       <div className="sideBarTopContent">
//         <img src={solaceLogo} alt="" height="45px" />
//       </div>
//       <div className="sideBarCenterContent">
//         <div className="sideBarInner">
//           {navData.map((item, index) => (
//             <div className="sideBarWrapper" key={index}>
//               <div
//                 className={`navItemsMainDiv ${index === selected && 'active'}`}
//                 onClick={() => {
//                   navigate(item.url);
//                   setSelected(index);
//                   if (item.subDrop && item.title === activeElement) {
//                     setActiveElement('');
//                   } else {
//                     setActiveElement(item.title);
//                   }
//                   // if (activeElement === item.title) {
//                   //   setActiveElement('');
//                   // }
//                 }}
//               >
//                 <div className="navItemsDiv">
//                   <img
//                     src={
//                       index === selected
//                         ? item.selected_image
//                         : item.unSelected_image
//                     }
//                     alt={index}
//                     height="40px"
//                     width="40px"
//                   />
//                   <span className="navItemsSpan">{item.title}</span>
//                 </div>
//                 <span>
//                   {item.subDrop && (
//                     <button
//                       type="button"
//                       onClick={() => {
//                         if (item.subDrop && item.title === activeElement) {
//                           setActiveElement('');
//                         } else {
//                           setActiveElement(item.title);
//                         }
//                       }}
//                     >
//                       <img
//                         src={
//                           item.subDrop && item.title === activeElement
//                             ? upArrow
//                             : downArrow
//                         }
//                         alt="downArrow"
//                       />
//                     </button>
//                   )}
//                 </span>
//               </div>
//               {item.subDrop && item.title === activeElement && (
//                 <ul className="subDrop" key={item.title}>
//                   {item.subDrop.map((subItems) => (
//                     <li>{subItems.title}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="sideBarBottomContent">
//           <div className="navItemsMainDiv">
//             <div className="navItemsDiv">
//               <span
//                 className="navItemsSpan"
//                 onClick={() => {
//                   setUser([]);
//                   setToken('');
//                   navigate(0);
//                 }}
//               >
//                 logout
//               </span>
//             </div>
//             <div />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import './Navbar/Navbar.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import homeSelected from '../assets/Navbar/selected/solace_nav_selected-1.svg';
import solaceLogo from '../assets/Navbar/Solace_Logo.svg';
import propertiesSelected from '../assets/Navbar/selected/solace_nav_selected-2.svg';
import contactsSelected from '../assets/Navbar/selected/solace_nav_selected-3.svg';
import tenanciesSelected from '../assets/Navbar/selected/solace_nav_selected-4.svg';
import progressionsSelected from '../assets/Navbar/selected/solace_nav_selected-5.svg';
import accountsSelected from '../assets/Navbar/selected/solace_nav_selected-6.svg';
import eSignatureSelected from '../assets/Navbar/selected/solace_nav_selected-7.svg';
import bulkUploadSelected from '../assets/Navbar/selected/solace_nav_selected-8.svg';
import reportSelected from '../assets/Navbar/selected/solace_nav_selected-9.svg';
import toolsSelected from '../assets/Navbar/selected/solace_nav_selected-10.svg';
import homeUnselected from '../assets/Navbar/unselected/solace_nav_unselected-1.svg';
import propertiesUnselected from '../assets/Navbar/unselected/solace_nav_unselected-2.svg';
import contactsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-3.svg';
import tenanciesUnselected from '../assets/Navbar/unselected/solace_nav_unselected-4.svg';
import progressionsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-5.svg';
import accountsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-6.svg';
import eSignatureUnselected from '../assets/Navbar/unselected/solace_nav_unselected-7.svg';
import bulkUploadUnselected from '../assets/Navbar/unselected/solace_nav_unselected-8.svg';
import reportUnselected from '../assets/Navbar/unselected/solace_nav_unselected-9.svg';
import toolsUnselected from '../assets/Navbar/unselected/solace_nav_unselected-10.svg';
import solaceShort from '../assets/Common/solace_short.svg';
import shrinkLogo from '../assets/Navbar/shrinkLogo.svg';

import downArrow from '../assets/Navbar/downArrow.svg';
import upArrow from '../assets/Navbar/upArrow.svg';

import { useStore } from '../Store/Store';

function Navbar() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeElement, setActiveElement] = useState('');
  const navData = [
    {
      id: 1,
      title: 'Home',
      selected_image: homeSelected,
      unSelected_image: homeUnselected,
      url: '/',
    },
    {
      id: 2,
      title: 'Properties',
      selected_image: propertiesSelected,
      unSelected_image: propertiesUnselected,
      url: '/properties',
      subDrop: [],
    },
    {
      id: 3,
      title: 'Contacts',
      selected_image: contactsSelected,
      unSelected_image: contactsUnselected,
      url: '/contacts',
      subDrop: [
        {
          id: 11,
          title: 'My Contacts',
          selected_image: contactsSelected,
          unSelected_image: contactsUnselected,
          url: '/contacts',
        },
        {
          id: 12,
          title: 'Groups',
          selected_image: contactsSelected,
          unSelected_image: contactsUnselected,
          url: '/contacts',
        },
      ],
    },
    {
      id: 4,
      title: 'Tenancies',
      selected_image: tenanciesSelected,
      unSelected_image: tenanciesUnselected,
      url: '/tenancies',
      subDrop: [],
    },
    {
      id: 5,
      title: 'Progressions',
      selected_image: progressionsSelected,
      unSelected_image: progressionsUnselected,
      url: '/progressions',
    },
    {
      id: 6,
      title: 'Accounts',
      selected_image: accountsSelected,
      unSelected_image: accountsUnselected,
      url: '/accounts',
      subDrop: [],
    },
    {
      id: 7,
      title: 'E-Signature',
      selected_image: eSignatureSelected,
      unSelected_image: eSignatureUnselected,
      url: '/e-signature',
      subDrop: [],
    },
    {
      id: 8,
      title: 'Bulk Upload',
      selected_image: bulkUploadSelected,
      unSelected_image: bulkUploadUnselected,
      url: '/bulk-upload',
    },
    {
      id: 9,
      title: 'Report',
      selected_image: reportSelected,
      unSelected_image: reportUnselected,
      url: '/report',
    },
    {
      id: 10,
      title: 'Tools',
      selected_image: toolsSelected,
      unSelected_image: toolsUnselected,
      url: '/tools',
      // subDrop: [],
    },
  ];
  const { setUser, setToken } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    setToken: state.setToken,
  }));

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const firstPart = pathParts[1];
    const foundItem = navData.find(
      (item) => firstPart === item.url.split('/')[1]
    );
    if (foundItem) {
      setSelected(foundItem.id - 1);
    } else {
      setSelected(null);
    }
  }, [location]);
  const [shrink, setShrink] = useState(true);
  const handleMouseOut = () => {
    setTimeout(() => {
      setShrink(!shrink);
    }, 100);
  };

  return (
    <div
      className={`${shrink ? 'collapsed ' : 'sideBar'}`}
      // onMouseEnter={() => {
      //   setShrink(false);
      // }}
      // onMouseLeave={() => {
      //   handleMouseOut();
      // }}
    >
      <div
        className="sideBarTopContent"
        style={{ paddingLeft: shrink ? '0px' : '' }}
      >
        <img
          src={shrink ? solaceShort : solaceLogo}
          alt=""
          height={'31.9px'}
          width={'104px'}
          style={{ position: 'relative', left: '-5px' }}
        />
        <img
          src={shrinkLogo}
          alt="shrinkLogo"
          style={{
            position: 'absolute',
            top: '21px',
            right: shrink ? '-36px' : '-20px',
            transform: !shrink ? 'rotate(180deg)' : '',
            cursor: 'pointer',
          }}
          onClick={() => {
            handleMouseOut();
          }}
        />
      </div>
      <div className="sideBarCenterContent">
        <div className="sideBarInner">
          {navData.map((item, index) => (
            <div className="sideBarWrapper" key={index}>
              <div
                className={`navItemsMainDiv ${index === selected && 'active'}`}
                style={{ width: shrink ? '80%' : '' }}
                onClick={() => {
                  navigate(item.url);
                  setSelected(index);
                  if (item.subDrop && item.title === activeElement) {
                    setActiveElement('');
                  } else {
                    setActiveElement(item.title);
                  }
                  // if (activeElement === item.title) {
                  //   setActiveElement('');
                  // }
                }}
              >
                <div className="navItemsDiv">
                  <img
                    src={
                      index === selected
                        ? item.selected_image
                        : item.unSelected_image
                    }
                    alt={index}
                    height="40px"
                    width="40px"
                  />
                  {!shrink && (
                    <span className="navItemsSpan">{item.title}</span>
                  )}
                </div>
                {!shrink && (
                  <span>
                    {item.subDrop && (
                      <button
                        type="button"
                        onClick={() => {
                          if (item.subDrop && item.title === activeElement) {
                            setActiveElement('');
                          } else {
                            setActiveElement(item.title);
                          }
                        }}
                      >
                        <img
                          src={
                            item.subDrop && item.title === activeElement
                              ? upArrow
                              : downArrow
                          }
                          alt="downArrow"
                        />
                      </button>
                    )}
                  </span>
                )}
              </div>
              {!shrink && item.subDrop && item.title === activeElement && (
                <ul className="subDrop" key={item.title}>
                  {item.subDrop.map((subItems) => (
                    <li style={{ color: shrink ? '#817eff' : '' }}>
                      {subItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="sideBarBottomContent">
          <div className="navItemsMainDiv">
            <div className="navItemsDiv">
              <span
                className="navItemsSpan"
                onClick={() => {
                  setUser([]);
                  setToken('');
                  navigate(0);
                }}
              >
                Logout
              </span>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
