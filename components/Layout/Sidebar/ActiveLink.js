import React, { Children, cloneElement } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const ActiveLink = ({ children, activeClassName, text, ...props }) => {

    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            <ListItem disablePadding className={className || null} >
                <ListItemButton sx={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    borderRadius: '0px 20px 20px 0px',
                    "&:hover": {
                        backgroundColor: "#e7e3fc17",
                    }
                }}>
                    <ListItemIcon>
                        {cloneElement(child, {
                            className: 'menu-item-icon',
                        })}
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant="p">{text}</Typography>
                        }
                    />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default ActiveLink