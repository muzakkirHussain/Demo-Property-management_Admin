import React from 'react';
import '../Styles/Components/FilterComponent.scss';
import { Button } from './Button';
import unSelGridVIew from '../assets/Common/unselected_gridView.svg';
import unSelListView from '../assets/Common/unselected_listView.svg';
import selGridView from '../assets/Common/selected_gridView.svg';
import selListView from '../assets/Common/selected_listView.svg';
import plusIcon from '../assets/Common/plusIcon.svg';

function FilterComponent(props) {
  const {
    selectedView,
    setSelectedView,
    filerList,
    selectedFilter,
    setSelectedFilter,
    buttonFunction,
    addons = [],
  } = props;
  return (
    <div className="mainFilter">
      <div className="rightSection">
        {filerList.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              setSelectedFilter(item.title);
            }}
          >
            <span
              key={item}
              style={{
                background:
                  selectedFilter === item.title ? '#817EFF' : '#ffffff',
                color: selectedFilter === item.title ? '#ffffff' : 'black',
                borderColor: selectedFilter === item.title && 'transparent',
              }}
              // className
            >
              {item.unSelectedIcon && (
                <img
                  src={
                    selectedFilter === item.title
                      ? item?.selectedIcon
                      : item?.unSelectedIcon
                  }
                  alt=""
                  width={'15px'}
                  height={'15px'}
                />
              )}
              {item.title}
            </span>
          </button>
        ))}
      </div>
      {addons.includes('view') && (
        <div className="leftSection">
          <Button
            title={
              <>
                <img src={plusIcon} /> Add Contact
              </>
            }
            active
            type="submit"
            handleClick={(e) => {
              e.preventDefault();
              buttonFunction();
              // handleResendInvite.mutate();
            }}
          />

          <div className="viewSection">
            <button
              type="button"
              onClick={() => {
                setSelectedView('gridView');
              }}
              style={{
                background: selectedView === 'gridView' ? '#817EFF' : '#ffffff',
              }}
            >
              <img
                src={selectedView === 'gridView' ? selGridView : unSelGridVIew}
                alt="gridVIew"
                width="20px"
                height="20px"
              />
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedView('listView');
              }}
              style={{
                background: selectedView === 'listView' ? '#817EFF' : '#ffffff',
              }}
            >
              <img
                src={selectedView === 'listView' ? selListView : unSelListView}
                alt="listView"
                width="20px"
                height="20px"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { FilterComponent };
