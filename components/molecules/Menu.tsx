interface IProps {
  isDesktop?: boolean
}

const Menu = ({ isDesktop }: IProps) => {
  return (
    <ul
      tabIndex={0}
      className={
        isDesktop
          ? 'menu menu-horizontal px-1'
          : 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content border border-base-200'
      }
    >
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul
            className={`p-2 w-32 text-base-content ${
              isDesktop ? 'border border-base-200' : ''
            }`}
          >
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  )
}

export default Menu
