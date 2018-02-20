import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="column" id="sidebar">
                        <div className="ui secondary vertical fluid menu">
                            <Link to={'/test1'}><a className="active item">Dashboard</a> </Link>
                            <Link to={'/reports'}>   <a className="item">Reports</a></Link>
                            <Link to={'/analytics'}>    <a className="item">Analytics</a></Link>
                            <Link to={'/export'}>    <a className="item">Export</a></Link>
                            <div className="ui hidden divider"></div>
                            <Link to={'/navtime1'}>    <a className="item">Nav item</a></Link>
                            <Link to={'/navtime2'}>     <a className="item">Nav item again</a></Link>
                            <Link to={'/navtime3'}>     <a className="item">One more nav</a></Link>
                            <Link to={'/navtime4'}>    <a className="item">Another nav item</a></Link>
                            <Link to={'/navtime5'}>    <a className="item">More navigation</a></Link>
                            <div className="ui hidden divider"></div>
                            <Link to={'/macintosh'}>     <a className="item">Macintosh</a></Link>
                            <Link to={'/linux'}>     <a className="item">Linux</a></Link>
                            <Link to={'/windows'}>     <a className="item">Windows</a></Link>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}
export default Sidebar;