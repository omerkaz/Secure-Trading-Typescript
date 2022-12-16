import React from 'react'

function ErrorMessages({ error }: { error: string }): JSX.Element {
    return <div className="fs-6 fw-light text-danger text-center mt-2">{error}</div>;
}

export default ErrorMessages