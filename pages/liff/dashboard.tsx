import React from 'react'

type Props = {}

function dashboard({ }: Props) {
    return (

        <div className="row row-deck row-cards">
            <div className="col-sm-6 col-lg-3">
                <div className="card card-borderless">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="subheader">Sales</div>
                            <div className="ms-auto lh-1">
                                <div className="dropdown">
                                    <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item active" href="#">Last 7 days</a>
                                        <a className="dropdown-item" href="#">Last 30 days</a>
                                        <a className="dropdown-item" href="#">Last 3 months</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h1 mb-3">75%</div>
                        <div className="d-flex mb-2">
                            <div>Conversion rate</div>
                            <div className="ms-auto">
                                <span className="text-green d-inline-flex align-items-center lh-1">
                                    7% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                </span>
                            </div>
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-blue" style={{ width: '75%' }} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="75% Complete">
                                <span className="visually-hidden">75% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card card-borderless">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="subheader">Sales</div>
                            <div className="ms-auto lh-1">
                                <div className="dropdown">
                                    <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item active" href="#">Last 7 days</a>
                                        <a className="dropdown-item" href="#">Last 30 days</a>
                                        <a className="dropdown-item" href="#">Last 3 months</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h1 mb-3">75%</div>
                        <div className="d-flex mb-2">
                            <div>Conversion rate</div>
                            <div className="ms-auto">
                                <span className="text-green d-inline-flex align-items-center lh-1">
                                    7% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                </span>
                            </div>
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-blue" style={{ width: '75%' }} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="75% Complete">
                                <span className="visually-hidden">75% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card card-borderless">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="subheader">Sales</div>
                            <div className="ms-auto lh-1">
                                <div className="dropdown">
                                    <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item active" href="#">Last 7 days</a>
                                        <a className="dropdown-item" href="#">Last 30 days</a>
                                        <a className="dropdown-item" href="#">Last 3 months</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h1 mb-3">75%</div>
                        <div className="d-flex mb-2">
                            <div>Conversion rate</div>
                            <div className="ms-auto">
                                <span className="text-green d-inline-flex align-items-center lh-1">
                                    7% {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                                </span>
                            </div>
                        </div>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-blue" style={{ width: '75%' }} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="75% Complete">
                                <span className="visually-hidden">75% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default dashboard