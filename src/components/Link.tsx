import * as React from 'react'
import routes from '../../server/routes'

interface ILinkProps {
  route: string;
  children?: any;
}

export default function (props: ILinkProps) {
  return (
    <routes.Link route={props.route}>
      {props.children}
    </routes.Link>
  )
}
