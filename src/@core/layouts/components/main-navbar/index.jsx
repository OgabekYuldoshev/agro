import { useState } from 'react'
import * as I from "react-feather"
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

export default () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <>
            <nav className="px-5 bg-success text-white py-1">
                <div className=" d-flex align-items-center justify-content-between">
                    <span>
                        <I.Phone />
                        +998(71) 209-68-68, 209-68-26, +998(93) 541-41-41
                    </span>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle color='primary' caret>
                            Controlled
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                            <DropdownItem href='/' tag='a' disabled>
                                Option 2
                            </DropdownItem>
                            <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
                <div>
                    hello
                </div>
            </nav>
        </>
    )
}