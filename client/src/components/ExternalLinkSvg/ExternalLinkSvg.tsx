export function ExternalLinkSvg({ color }: { color: string }): JSX.Element {
  return (
    <>
      <svg
        stroke={color}
        fill={color}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.6em"
        width="1.6em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
        <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
      </svg>
    </>
  )
}
