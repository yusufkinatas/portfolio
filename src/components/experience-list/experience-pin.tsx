import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import clsx from "clsx";
import { memo } from "react";

import styles from "./experience-list.module.scss";

const _ExperiencePin = ({
  pos,
  onClick,
  title,
  focused,
}: {
  title: string;
  pos: google.maps.LatLngLiteral;
  onClick: () => void;
  focused: boolean;
}) => {
  return (
    <OverlayViewF
      position={pos}
      zIndex={focused ? 1 : 0}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(offsetWidth, offsetHeight) => {
        return {
          x: -offsetWidth / 2,
          y: -offsetHeight / 2,
        };
      }}
    >
      <div
        className={clsx(styles.experiencePin, focused && styles.focused)}
        onClick={onClick}
      >
        {title
          .split(" ")
          .map((word) => word.substring(0, 1))
          .join("")}
      </div>
      {focused && (
        <div onClick={onClick} className={styles.fullTitle}>
          <div>{title}</div>
        </div>
      )}
    </OverlayViewF>
  );
};

export const ExperiencePin = memo(_ExperiencePin);
