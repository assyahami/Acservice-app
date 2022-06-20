import React from 'react';
import { RiCustomerService2Fill, Ri24HoursLine } from 'react-icons/ri';
import { GiRotaryPhone } from 'react-icons/gi';
import { icons } from '../customdb/icons';

function Footer() {
  return (
    <footer>
      <div
        className={
          'footer shadow animate__animated animate__bounce animate__delay-1s animate__fadeInDown'
        }
      >
        <div className={'footerone'}>
          <h6 id="finaltext">
            We Want You As A Customer For Life Our team of is ready to help with
            professionalism
          </h6>

          <div className="d-flex justify-content-around align-items-center">
            <img
              className="shadow-lg"
              style={{ borderRadius: '100%' }}
              width={'100'}
              src={'../footer.jpg'}
              alt="loading..."
            />
            <div className="customer">
              <h4>
                Customer Care <Ri24HoursLine />
              </h4>
              <span className="fw-bold">
                <RiCustomerService2Fill />: +6956123112
              </span>
              <br />
              <span className="fw-bold">
                <GiRotaryPhone /> :+3564451231
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center flex-wrap duties">
          <div className="">
            <span className="service">Other Service</span>
            <ul>
              {[
                'Plumbing',
                'Handyman',
                'Cleaing Service',
                'Electrical',
                'Home Wirirng Setup',
              ].map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="">
            <span className="ms-3 service">Our Service</span>

            <ul>
              <li>Ac Fixng</li>
              <li>Ac compressor Reparing</li>
              <li>Ac modification</li>
              <li>Ac Thermostat Reparing</li>
              <li>AC Duct Cleaing</li>
            </ul>
          </div>
        </div>
        <End />
      </div>
    </footer>
  );
}
export const End = () => {
  return (
    <div className="d-flex end justify-content-between w-100 flex-wrap align-items-center">
      <div className="">
        <span>© 2022 by Our WebSetie . All rights reserved.</span>
      </div>
      <div className="d-flex justifty-content-around align-items-center">
        <h6 className='mt-1 fw-bolder'>Follow us-</h6>
        <ul className="list-group  list list-group-horizontal-md">
          {icons.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
