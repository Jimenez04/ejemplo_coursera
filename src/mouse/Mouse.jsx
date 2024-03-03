import React from 'react'

import { useState, useEffect } from 'react';

const withMousePosition = (WrappedComponent) => { 
    return (props) => { 
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y:0
        })

        useEffect(() => { 
            const handleMousePositionChange = (e) => { 
                setMousePosition({
                    x: e.clientX,
                    y:e.clientY
                })
            }
            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener('mousemove', handleMousePositionChange)
            };
        }, [])

        return <WrappedComponent{...props} mousePosition={ mousePosition}></WrappedComponent>
    }
}


const PanelMouserLogger = ({ mousePosition }) => { 
    if (!mousePosition) {
        return null;
    }
    return (
        <div>
            <p>Mouse Position</p>
            <div>
                <span>x: { mousePosition.x }</span>
                <span>y: { mousePosition.y }</span>
            </div>
        </div>
    );
}

const PointMouseLogger = ({ mousePosition }) => { 
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({ mousePosition.x }, {mousePosition.y })
        </p>
    )
}

const PanelMouserTracker = withMousePosition(PanelMouserLogger);
const PointMouserTracker = withMousePosition(PointMouseLogger);


export default function Mouse() {
  return (
      <div>
          <header>Jose Jimenez</header>
          <PanelMouserTracker></PanelMouserTracker>
          <PointMouserTracker></PointMouserTracker>
    </div>
  )
}
