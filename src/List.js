import React from 'react';
import ListItem from './ListItem';

function List(props) {
        return (
          <div className="list-container">
            {props.entries.length > 0 ? (
              <div>
                <ul className="list">
                  {props.entries.map(item => (
                    <li className="list-item" key={item.id}>
                      <ListItem entry={item} />
                    </li>
                  ))}
                </ul>
                {props.children}
              </div>
            ) : (
              <p>Nothing here yet</p>
            )}
          </div>
        );

}

export default List