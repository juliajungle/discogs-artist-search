import styled from "styled-components";

const ReleaseList = styled.ul`
  list-style: none;
`;
export const Releases = ({ releases = [] }) => {
  return (
    <div>
      <ReleaseList>
        {releases.map(({ id, title, year }) => {
          return (
            <li key={id}>
              <span>{title} </span> <span>{year}</span>
            </li>
          );
        })}
      </ReleaseList>
    </div>
  );
};
