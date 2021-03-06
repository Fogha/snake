import React from 'react'

export default function Snake({ snakeDots }) {
  return (
    <div>
      {
        snakeDots.map((dot, i) => {
          const style = {
            left: `${dot[0]}%`,
            top: `${dot[1]}%`
          }

          return (
            <div className="snakeDot" key={i} style={style}></div>
          )
        })
      }
    </div>
  )
}
