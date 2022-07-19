import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissionsData } from '../../redux/mission/missionSlice';
import './Mission.css';

function Mission() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch, getMissionsData]);
  const missions = useSelector((state) => state.mission);
  console.log(missions);
  return (
    <Table striped bordered hover size="lg" className="container my-5">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <div className="btns">
              <tr>
                <button type="button" className="btn btn-secondary ms-3">
                  NOT A MEMBER
                </button>
                <button type="button" className="btn btn-outline-dark ms-3">
                  Join Mission
                </button>
              </tr>
            </div>
          </tr>
        ))}
        {/* <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <div className="btns">
            <tr>
              <button type="button" className="btn btn-info ms-3">
                NOT A MEMBER
              </button>
              <button type="button" className="btn btn-outline-danger ms-3">
                Join Mission
              </button>
            </tr>
          </div>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default Mission;
