import React from "react";
import { Colors } from "../helpers/Colors";

export const TwitterIcon = ({ color = Colors.grey }) => {
  return (
    <svg
      width="19px"
      height="16px"
      viewBox="0 0 19 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9813 2.18472C18.2815 2.49427 17.5393 2.69757 16.7795 2.78789C17.5804 2.30887 18.1798 1.55498 18.4661 0.666721C17.7145 1.11405 16.8904 1.42755 16.0315 1.59714C15.4545 0.979835 14.6898 0.570438 13.8562 0.432591C13.0225 0.294744 12.1667 0.436172 11.4218 0.834887C10.6768 1.2336 10.0845 1.86726 9.73681 2.63736C9.38914 3.40746 9.30564 4.27085 9.49929 5.0933C7.97497 5.0169 6.48376 4.62078 5.12247 3.93066C3.76118 3.24054 2.56024 2.27185 1.59762 1.08747C1.25689 1.67272 1.07783 2.33801 1.07879 3.01522C1.07879 4.34439 1.75529 5.51864 2.78379 6.20614C2.17513 6.18697 1.57987 6.0226 1.04762 5.72672V5.77439C1.04781 6.65961 1.35413 7.51753 1.91465 8.20269C2.47517 8.88785 3.2554 9.35807 4.12304 9.53364C3.55802 9.68675 2.96557 9.70932 2.39054 9.59963C2.63517 10.3616 3.11196 11.028 3.75417 11.5055C4.39637 11.983 5.17182 12.2477 5.97196 12.2626C5.17673 12.8871 4.2662 13.3488 3.29243 13.6212C2.31866 13.8936 1.30074 13.9714 0.296875 13.8502C2.04926 14.9772 4.08921 15.5755 6.17271 15.5735C13.2246 15.5735 17.081 9.73164 17.081 4.66522C17.081 4.50022 17.0765 4.33339 17.0691 4.17022C17.8197 3.62771 18.4676 2.95566 18.9822 2.18564L18.9813 2.18472Z"
        fill={color}
      />
    </svg>
  );
};