import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
  resumePageCollection?: Maybe<ResumePageCollection>;
  skillListCollection?: Maybe<SkillListCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsResumePageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsSkillListCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  company?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/experience) */
export type ExperienceCompanyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/experience) */
export type ExperienceTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/experience) */
export type ExperienceYearArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Experience>>;
};

export type ExperienceFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  company_exists?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  company_not?: Maybe<Scalars['String']>;
  company_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_contains?: Maybe<Scalars['String']>;
  company_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  year_exists?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['String']>;
  year_not?: Maybe<Scalars['String']>;
  year_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_contains?: Maybe<Scalars['String']>;
  year_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ExperienceFilter>>>;
  AND?: Maybe<Array<Maybe<ExperienceFilter>>>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumePageCollection?: Maybe<ResumePageCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ExperienceLinkingCollectionsResumePageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ExperienceOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contactText?: Maybe<PersonContactText>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type PersonNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type PersonTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type PersonDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/person) */
export type PersonContactTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Person>>;
};

export type PersonContactText = {
  __typename?: 'PersonContactText';
  json: Scalars['JSON'];
  links: PersonContactTextLinks;
};

export type PersonContactTextAssets = {
  __typename?: 'PersonContactTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PersonContactTextEntries = {
  __typename?: 'PersonContactTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PersonContactTextLinks = {
  __typename?: 'PersonContactTextLinks';
  entries: PersonContactTextEntries;
  assets: PersonContactTextAssets;
};

export type PersonFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  contactText_exists?: Maybe<Scalars['Boolean']>;
  contactText_contains?: Maybe<Scalars['String']>;
  contactText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<PersonFilter>>>;
  AND?: Maybe<Array<Maybe<PersonFilter>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Asset>;
  primaryColor?: Maybe<Scalars['String']>;
  urLsCollection?: Maybe<ProjectUrLsCollection>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<ProjectDescription>;
  techStack?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtubeUrl?: Maybe<Scalars['String']>;
  imagesCollection?: Maybe<AssetCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectPrimaryColorArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectUrLsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectCategoriesArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectTechStackArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectYoutubeUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/project) */
export type ProjectImagesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Project>>;
};

export type ProjectDescription = {
  __typename?: 'ProjectDescription';
  json: Scalars['JSON'];
  links: ProjectDescriptionLinks;
};

export type ProjectDescriptionAssets = {
  __typename?: 'ProjectDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type ProjectDescriptionEntries = {
  __typename?: 'ProjectDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ProjectDescriptionLinks = {
  __typename?: 'ProjectDescriptionLinks';
  entries: ProjectDescriptionEntries;
  assets: ProjectDescriptionAssets;
};

export type ProjectFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  logo_exists?: Maybe<Scalars['Boolean']>;
  primaryColor_exists?: Maybe<Scalars['Boolean']>;
  primaryColor?: Maybe<Scalars['String']>;
  primaryColor_not?: Maybe<Scalars['String']>;
  primaryColor_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryColor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryColor_contains?: Maybe<Scalars['String']>;
  primaryColor_not_contains?: Maybe<Scalars['String']>;
  urLsCollection_exists?: Maybe<Scalars['Boolean']>;
  categories_exists?: Maybe<Scalars['Boolean']>;
  categories_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  techStack_exists?: Maybe<Scalars['Boolean']>;
  techStack_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  techStack_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  techStack_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtubeUrl_exists?: Maybe<Scalars['Boolean']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  youtubeUrl_not?: Maybe<Scalars['String']>;
  youtubeUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtubeUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtubeUrl_contains?: Maybe<Scalars['String']>;
  youtubeUrl_not_contains?: Maybe<Scalars['String']>;
  imagesCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ProjectFilter>>>;
  AND?: Maybe<Array<Maybe<ProjectFilter>>>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ProjectOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PrimaryColorAsc = 'primaryColor_ASC',
  PrimaryColorDesc = 'primaryColor_DESC',
  YoutubeUrlAsc = 'youtubeUrl_ASC',
  YoutubeUrlDesc = 'youtubeUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProjectUrLsCollection = {
  __typename?: 'ProjectUrLsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ProjectUrl>>;
};

/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/projectUrl) */
export type ProjectUrl = Entry & {
  __typename?: 'ProjectUrl';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectUrlLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/projectUrl) */
export type ProjectUrlLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/projectUrl) */
export type ProjectUrlNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/projectUrl) */
export type ProjectUrlTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/projectUrl) */
export type ProjectUrlUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ProjectUrlCollection = {
  __typename?: 'ProjectUrlCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ProjectUrl>>;
};

export type ProjectUrlFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  Type_exists?: Maybe<Scalars['Boolean']>;
  Type?: Maybe<Scalars['String']>;
  Type_not?: Maybe<Scalars['String']>;
  Type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Type_contains?: Maybe<Scalars['String']>;
  Type_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ProjectUrlFilter>>>;
  AND?: Maybe<Array<Maybe<ProjectUrlFilter>>>;
};

export type ProjectUrlLinkingCollections = {
  __typename?: 'ProjectUrlLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type ProjectUrlLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ProjectUrlLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ProjectUrlOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'Type_ASC',
  TypeDesc = 'Type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  projectUrl?: Maybe<ProjectUrl>;
  projectUrlCollection?: Maybe<ProjectUrlCollection>;
  resumePage?: Maybe<ResumePage>;
  resumePageCollection?: Maybe<ResumePageCollection>;
  skillList?: Maybe<SkillList>;
  skillListCollection?: Maybe<SkillListCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectFilter>;
  order?: Maybe<Array<Maybe<ProjectOrder>>>;
};


export type QueryProjectUrlArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProjectUrlCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectUrlFilter>;
  order?: Maybe<Array<Maybe<ProjectUrlOrder>>>;
};


export type QueryResumePageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryResumePageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ResumePageFilter>;
  order?: Maybe<Array<Maybe<ResumePageOrder>>>;
};


export type QuerySkillListArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySkillListCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SkillListFilter>;
  order?: Maybe<Array<Maybe<SkillListOrder>>>;
};


export type QueryExperienceArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryExperienceCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ExperienceFilter>;
  order?: Maybe<Array<Maybe<ExperienceOrder>>>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<Array<Maybe<PersonOrder>>>;
};


export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePage = Entry & {
  __typename?: 'ResumePage';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ResumePageLinkingCollections>;
  experiencesCollection?: Maybe<ResumePageExperiencesCollection>;
  resumePdf?: Maybe<Asset>;
  skillList1?: Maybe<SkillList>;
  skillList2?: Maybe<SkillList>;
  skillList3?: Maybe<SkillList>;
  skillList4?: Maybe<SkillList>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageExperiencesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageResumePdfArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageSkillList1Args = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageSkillList2Args = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageSkillList3Args = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/resumePage) */
export type ResumePageSkillList4Args = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ResumePageCollection = {
  __typename?: 'ResumePageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ResumePage>>;
};

export type ResumePageExperiencesCollection = {
  __typename?: 'ResumePageExperiencesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Experience>>;
};

export type ResumePageFilter = {
  skillList1?: Maybe<CfSkillListNestedFilter>;
  skillList2?: Maybe<CfSkillListNestedFilter>;
  skillList3?: Maybe<CfSkillListNestedFilter>;
  skillList4?: Maybe<CfSkillListNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  experiencesCollection_exists?: Maybe<Scalars['Boolean']>;
  resumePdf_exists?: Maybe<Scalars['Boolean']>;
  skillList1_exists?: Maybe<Scalars['Boolean']>;
  skillList2_exists?: Maybe<Scalars['Boolean']>;
  skillList3_exists?: Maybe<Scalars['Boolean']>;
  skillList4_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ResumePageFilter>>>;
  AND?: Maybe<Array<Maybe<ResumePageFilter>>>;
};

export type ResumePageLinkingCollections = {
  __typename?: 'ResumePageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ResumePageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ResumePageOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/skillList) */
export type SkillList = Entry & {
  __typename?: 'SkillList';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SkillListLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  icon?: Maybe<Asset>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/skillList) */
export type SkillListLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/skillList) */
export type SkillListTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/skillList) */
export type SkillListIconArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fydf0o2ery42/content_types/skillList) */
export type SkillListSkillsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SkillListCollection = {
  __typename?: 'SkillListCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SkillList>>;
};

export type SkillListFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  skills_exists?: Maybe<Scalars['Boolean']>;
  skills_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<SkillListFilter>>>;
  AND?: Maybe<Array<Maybe<SkillListFilter>>>;
};

export type SkillListLinkingCollections = {
  __typename?: 'SkillListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumePageCollection?: Maybe<ResumePageCollection>;
};


export type SkillListLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SkillListLinkingCollectionsResumePageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SkillListOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type CfSkillListNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  skills_exists?: Maybe<Scalars['Boolean']>;
  skills_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<CfSkillListNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSkillListNestedFilter>>>;
};

export type GetPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonQuery = (
  { __typename?: 'Query' }
  & { personCollection?: Maybe<(
    { __typename?: 'PersonCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'name' | 'title' | 'description'>
      & { contactText?: Maybe<(
        { __typename?: 'PersonContactText' }
        & Pick<PersonContactText, 'json'>
      )> }
    )>> }
  )> }
);


export const GetPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPerson(variables?: GetPersonQueryVariables, requestHeaders?: Headers): Promise<GetPersonQuery> {
      return withWrapper(() => client.request<GetPersonQuery>(print(GetPersonDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;