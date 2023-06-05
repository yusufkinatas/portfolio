import {
  GoogleMap,
  GoogleMapProps,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  GetResumePageQuery,
  Location,
  Maybe,
} from "contentful/contentful.graphql.types";
import { useCallback, useMemo, useState } from "react";

import { ExperienceItem } from "./experience-item";
import styles from "./experience-list.module.scss";
import { ExperiencePin } from "./experience-pin";

const extractPosFromExperience = (
  experience: {
    coordinates?: Maybe<Location>;
  } | null,
): google.maps.LatLngLiteral => {
  const { lat, lon } = experience?.coordinates ?? {};

  return {
    lat: lat ?? 0,
    lng: lon ?? 0,
  };
};

const center = { lat: 30, lng: -30 };

const options: GoogleMapProps["options"] = {
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  zoomControl: false,
  streetViewControl: false,
  keyboardShortcuts: false,
  zoom: 2,
  minZoom: 2,
};

export const ExperienceList = ({ data }: { data: GetResumePageQuery }) => {
  const resume = data.resumePageCollection?.items[0];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((_map: google.maps.Map) => {
    setMap(_map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const [focusedExperienceIndex, setFocusedExperienceIndex] = useState(-1);
  const toggleFocusedExperienceIndex = (i: number) =>
    setFocusedExperienceIndex((current) => (current === i ? -1 : i));

  const pins = useMemo(() => {
    return resume?.experiencesCollection?.items.map((item, i) => (
      <ExperiencePin
        key={item?.company}
        pos={extractPosFromExperience(item)}
        onClick={() => {
          toggleFocusedExperienceIndex(i);
        }}
        focused={i === focusedExperienceIndex}
        title={item?.company ?? ""}
      />
    ));
  }, [focusedExperienceIndex, resume]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.listContainer}>
        {resume?.experiencesCollection?.items.map((exp, i) => (
          <ExperienceItem
            key={exp?.company}
            year={exp?.year ?? ""}
            company={exp?.company ?? ""}
            title={exp?.title ?? ""}
            focused={i === focusedExperienceIndex}
            onClick={() => {
              toggleFocusedExperienceIndex(i);
              map?.setZoom(2);
              map?.panTo(extractPosFromExperience(exp));
            }}
          />
        ))}
      </div>

      <GoogleMap
        mapContainerClassName={styles.mapContainer}
        center={center}
        onLoad={onLoad}
        options={options}
        onUnmount={onUnmount}
      >
        {pins}
      </GoogleMap>
    </div>
  );
};
