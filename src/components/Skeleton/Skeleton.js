import React from "react";
import styled from "styled-components";

const SkeletonContent = styled.div`
  min-height: 320px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 13px;
  .cover {
    min-height: 90px;
    overflow: hidden;

    display: flex;
    align-items: center;

    .photo {
      height: 140px;
      flex: 1;
      &:not(:last-child) {
        margin-right: 3px;
      }
    }
  }
  .cart_logo {
    position: absolute;
    top: 40%;
    left: 25%;
    transform: translateX(-50%) translateY(-50%);
    min-height: 90px;
    min-width: 90px;
    border-radius: 100%;
  }

  .card-body {
    padding: 25px 5px 0px 10px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart_heading {
    min-height: 24px;
    width: 220px;
  }
  .cart_paragraph {
    min-height: 16px;
    margin-top: 5px;
    width: 250px;
  }

  .cart_button {
    min-width: 120px;
    max-width: 120px;
    border-radius: 100px;
    height: 30px;
    margin-top: 10px;
  }
  .main_skeleton_animation {
    opacity: 1;
    animation: skeleton_loading_animation 1s linear infinite alternate;
  }

  @keyframes skeleton_loading_animation {
    0% {
      background-color: hsl(1500, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

const Skeleton = () => {
  return (
    <SkeletonContent>
      <div className="cover ">
        <div className="photo main_skeleton_animation"></div>
        <div className="photo main_skeleton_animation"></div>
      </div>

      <div className="cart_logo main_skeleton_animation"></div>

      <div className="card-body">
        <div className="cart_heading main_skeleton_animation"></div>

        <div className="cart_paragraph main_skeleton_animation my-2"></div>
        <div className="cart_paragraph main_skeleton_animation"></div>

        <div className="cart_button main_skeleton_animation mt-3"></div>
      </div>
    </SkeletonContent>
  );
};

export default Skeleton;
