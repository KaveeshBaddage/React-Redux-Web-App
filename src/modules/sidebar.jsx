import React from 'react';


class Sidebar extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="column" id="sidebar">
                        <div className="ui secondary vertical fluid menu">
                            <a className="active item">Dashboard</a>
                            <a className="item">Reports</a>
                            <a className="item">Analytics</a>
                            <a className="item">Export</a>
                            <div className="ui hidden divider"></div>
                            <a className="item">Nav item</a>
                            <a className="item">Nav item again</a>
                            <a className="item">One more nav</a>
                            <a className="item">Another nav item</a>
                            <a className="item">More navigation</a>
                            <div className="ui hidden divider"></div>
                            <a className="item">Macintosh</a>
                            <a className="item">Linux</a>
                            <a className="item">Windows</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Sidebar;