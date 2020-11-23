import React from "react";

export const Message = ({type = 'is-default', children}) => <div data-testid="message" className={type}>{children}</div>