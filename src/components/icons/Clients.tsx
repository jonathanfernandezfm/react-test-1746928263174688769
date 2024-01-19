import { SVGProps } from "react"

const Clients = (props: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M6.75.333a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm17.25 0a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5ZM0 14.335c0-2.761 2.24-5.002 5.002-5.002h2.001c.745 0 1.453.164 2.09.455-.06.338-.088.69-.088 1.045 0 1.791.787 3.399 2.03 4.5H.997c-.548 0-.998-.45-.998-.998Zm18.998.998h-.032a5.985 5.985 0 0 0 2.03-4.5c0-.356-.034-.703-.09-1.045a4.957 4.957 0 0 1 2.09-.455h2.002A5.003 5.003 0 0 1 30 14.335a1 1 0 0 1-.998.998H18.998Zm-8.498-4.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM6 23.082a6.25 6.25 0 0 1 6.248-6.249h5.504A6.25 6.25 0 0 1 24 23.082c0 .689-.558 1.251-1.252 1.251H7.252c-.69 0-1.252-.557-1.252-1.251Z"
    />
  </svg>
)
export default Clients
