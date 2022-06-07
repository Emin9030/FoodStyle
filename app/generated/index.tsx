import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** Limit */
  Limit: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Offset */
  Offset: any;
  /** Password */
  Password: any;
  /** Rating */
  Rating: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** Represents NULL values */
  Void: any;
};

export type Allergen = {
  __typename?: 'Allergen';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BrowsingFiltersInput = {
  dishTypeId?: InputMaybe<Scalars['ID']>;
  locationCuisineTypeId?: InputMaybe<Scalars['ID']>;
  locationTypeId?: InputMaybe<Scalars['ID']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Card = {
  __typename?: 'Card';
  courseTypes: Array<CourseType>;
  createdAt: Scalars['DateTime'];
  diets: Array<Diet>;
  dishTypes: Array<DishType>;
  excludedIngredients: Array<Ingredient>;
  id: Scalars['ID'];
  locationCuisineTypes: Array<CuisineType>;
  locationTypes: Array<LocationType>;
  maxPrice?: Maybe<Scalars['Int']>;
  minPrice?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  shareCode?: Maybe<Scalars['String']>;
  sourceCard?: Maybe<SourceCard>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CardFiltersInput = {
  courseTypeIds: Array<Scalars['ID']>;
  dishTypeIds: Array<Scalars['ID']>;
  excludedIngredientIds: Array<Scalars['ID']>;
  locationCuisineTypeIds: Array<Scalars['ID']>;
  locationTypeIds: Array<Scalars['ID']>;
  maxPrice?: InputMaybe<Scalars['Int']>;
  minPrice?: InputMaybe<Scalars['Int']>;
};

export type CardInput = {
  courseTypeIds: Array<Scalars['ID']>;
  dietIds: Array<Scalars['ID']>;
  dishTypeIds: Array<Scalars['ID']>;
  excludedIngredientIds: Array<Scalars['ID']>;
  locationCuisineTypeIds: Array<Scalars['ID']>;
  locationTypeIds: Array<Scalars['ID']>;
  maxPrice?: InputMaybe<Scalars['Int']>;
  minPrice?: InputMaybe<Scalars['Int']>;
  name: Scalars['NonEmptyString'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type CoordinatesInput = {
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type CourseType = {
  __typename?: 'CourseType';
  id: Scalars['ID'];
  idPath: Array<Scalars['ID']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  namePath: Array<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type CourseTypeBase = {
  __typename?: 'CourseTypeBase';
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type CourseTypeTree = {
  __typename?: 'CourseTypeTree';
  children?: Maybe<Array<CourseTypeTree>>;
  courseType: CourseType;
};

export type CuisineType = {
  __typename?: 'CuisineType';
  id: Scalars['ID'];
  idPath: Array<Scalars['ID']>;
  imagePath?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  namePath: Array<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type CuisineTypeBase = {
  __typename?: 'CuisineTypeBase';
  id: Scalars['ID'];
  imagePath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type CuisineTypeTree = {
  __typename?: 'CuisineTypeTree';
  children?: Maybe<Array<CuisineTypeTree>>;
  cuisineType: CuisineType;
};

export type Diet = {
  __typename?: 'Diet';
  categoryId: Scalars['ID'];
  excludedAllergenIds: Array<Scalars['ID']>;
  excludedIngredientIds: Array<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type DietBase = {
  __typename?: 'DietBase';
  categoryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type DietCategory = {
  __typename?: 'DietCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DietCategoryWithDiets = {
  __typename?: 'DietCategoryWithDiets';
  diets: Array<Diet>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DietWithCategory = {
  __typename?: 'DietWithCategory';
  category: DietCategory;
  categoryId: Scalars['ID'];
  excludedAllergenIds: Array<Scalars['ID']>;
  excludedIngredientIds: Array<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
};

export type DishCountForDishType = {
  __typename?: 'DishCountForDishType';
  dishCount: Scalars['Int'];
  dishType: DishType;
};

export type DishCountForLocationCuisineType = {
  __typename?: 'DishCountForLocationCuisineType';
  dishCount: Scalars['Int'];
  locationCuisineType: CuisineType;
};

export type DishCountForLocationType = {
  __typename?: 'DishCountForLocationType';
  dishCount: Scalars['Int'];
  locationType: LocationType;
};

export type DishDetails = {
  __typename?: 'DishDetails';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceIngredients: Array<IngredientBase>;
  choiceTexts: Array<Scalars['String']>;
  courseType: CourseTypeBase;
  definiteAllergens: Array<Allergen>;
  definiteDiets: Array<DietBase>;
  definiteIngredients: Array<IngredientBase>;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  locations: Array<Location>;
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  probableAllergens: Array<Allergen>;
  probableIngredients: Array<IngredientBase>;
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishDetailsForCard = {
  __typename?: 'DishDetailsForCard';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceIngredients: Array<IngredientForCard>;
  choiceTexts: Array<Scalars['String']>;
  compatibleWithCard: Scalars['Boolean'];
  courseType: CourseTypeBase;
  definiteAllergens: Array<Allergen>;
  definiteDiets: Array<DietBase>;
  definiteIngredients: Array<IngredientBase>;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  locations: Array<Location>;
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  probableAllergens: Array<Allergen>;
  probableDiets: Array<DietBase>;
  probableIngredients: Array<IngredientForCard>;
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishListForCard = {
  __typename?: 'DishListForCard';
  dishes: Array<DishOnListForCard>;
  total: Scalars['Int'];
};

export type DishListForRated = {
  __typename?: 'DishListForRated';
  dishes: Array<DishOnListForRated>;
  total: Scalars['Int'];
};

export type DishListForViewed = {
  __typename?: 'DishListForViewed';
  dishes: Array<DishOnListForViewed>;
  total: Scalars['Int'];
};

export type DishOnListForCard = {
  __typename?: 'DishOnListForCard';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceTexts: Array<Scalars['String']>;
  compatibleWithCard: Scalars['Boolean'];
  courseType: CourseTypeBase;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  location: Location;
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishOnListForRated = {
  __typename?: 'DishOnListForRated';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceTexts: Array<Scalars['String']>;
  courseType: CourseTypeBase;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  location: Location;
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  rating: DishRating;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishOnListForViewed = {
  __typename?: 'DishOnListForViewed';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceTexts: Array<Scalars['String']>;
  courseType: CourseTypeBase;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  location: Location;
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
  view: DishView;
};

export type DishOnMenu = {
  __typename?: 'DishOnMenu';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceTexts: Array<Scalars['String']>;
  courseType: CourseTypeBase;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishOnMenuForCard = {
  __typename?: 'DishOnMenuForCard';
  avgRating?: Maybe<Scalars['Rating']>;
  choiceTexts: Array<Scalars['String']>;
  compatibleWithCard: Scalars['Boolean'];
  courseType: CourseTypeBase;
  description?: Maybe<Scalars['String']>;
  dishType: DishTypeBase;
  highPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  lowPrice?: Maybe<Scalars['Float']>;
  menuTitlePath: Array<MenuTitle>;
  name: Scalars['String'];
  rating?: Maybe<DishRating>;
  ratingCount: Scalars['Int'];
  scrapedAt: Scalars['DateTime'];
};

export type DishRating = {
  __typename?: 'DishRating';
  createdAt: Scalars['DateTime'];
  dishId: Scalars['ID'];
  rating: Scalars['Rating'];
  userId: Scalars['ID'];
};

export enum DishSortOrder {
  Distance = 'DISTANCE',
  Rating = 'RATING'
}

export type DishType = {
  __typename?: 'DishType';
  id: Scalars['ID'];
  idPath: Array<Scalars['ID']>;
  imagePath?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  namePath: Array<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type DishTypeBase = {
  __typename?: 'DishTypeBase';
  id: Scalars['ID'];
  imagePath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type DishTypeTree = {
  __typename?: 'DishTypeTree';
  children?: Maybe<Array<DishTypeTree>>;
  dishType: DishType;
};

export type DishView = {
  __typename?: 'DishView';
  createdAt: Scalars['DateTime'];
  dishId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  hasComponents: Scalars['Boolean'];
  id: Scalars['ID'];
  idPath: Array<Scalars['ID']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  namePath: Array<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type IngredientBase = {
  __typename?: 'IngredientBase';
  hasComponents: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type IngredientForCard = {
  __typename?: 'IngredientForCard';
  compatibleWithCard: Scalars['Boolean'];
  hasComponents: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type IngredientTree = {
  __typename?: 'IngredientTree';
  children?: Maybe<Array<IngredientTree>>;
  ingredient: Ingredient;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  avgRating?: Maybe<Scalars['Rating']>;
  coordinates: Coordinates;
  cuisineType: CuisineTypeBase;
  distance: Scalars['Float'];
  id: Scalars['ID'];
  locationType: LocationTypeBase;
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  shortAddress: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  workingHours: Array<WorkingHoursForDayOfWeek>;
};

export type LocationDetails = {
  __typename?: 'LocationDetails';
  address: Scalars['String'];
  avgRating?: Maybe<Scalars['Rating']>;
  coordinates: Coordinates;
  cuisineType: CuisineTypeBase;
  distance: Scalars['Float'];
  id: Scalars['ID'];
  locationType: LocationTypeBase;
  menu: Array<MenuSection>;
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  shortAddress: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  workingHours: Array<WorkingHoursForDayOfWeek>;
};

export type LocationDetailsForCard = {
  __typename?: 'LocationDetailsForCard';
  address: Scalars['String'];
  avgRating?: Maybe<Scalars['Rating']>;
  coordinates: Coordinates;
  cuisineType: CuisineTypeBase;
  distance: Scalars['Float'];
  id: Scalars['ID'];
  locationType: LocationTypeBase;
  menu: Array<MenuSection>;
  menuForCard: Array<MenuSectionForCard>;
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  shortAddress: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  workingHours: Array<WorkingHoursForDayOfWeek>;
};

export type LocationListForCard = {
  __typename?: 'LocationListForCard';
  locations: Array<LocationOnListForCard>;
  total: Scalars['Int'];
};

export type LocationListForViewed = {
  __typename?: 'LocationListForViewed';
  locations: Array<LocationOnListForViewed>;
  total: Scalars['Int'];
};

export type LocationOnListForCard = {
  __typename?: 'LocationOnListForCard';
  address: Scalars['String'];
  avgRating?: Maybe<Scalars['Rating']>;
  coordinates: Coordinates;
  cuisineType: CuisineTypeBase;
  dishTotalForCard: Scalars['Int'];
  distance: Scalars['Float'];
  id: Scalars['ID'];
  locationType: LocationTypeBase;
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  shortAddress: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  workingHours: Array<WorkingHoursForDayOfWeek>;
};

export type LocationOnListForViewed = {
  __typename?: 'LocationOnListForViewed';
  address: Scalars['String'];
  avgRating?: Maybe<Scalars['Rating']>;
  coordinates: Coordinates;
  cuisineType: CuisineTypeBase;
  dishTotal: Scalars['Int'];
  distance: Scalars['Float'];
  id: Scalars['ID'];
  locationType: LocationTypeBase;
  name: Scalars['String'];
  neighbourhood: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  shortAddress: Scalars['String'];
  view: LocationView;
  website?: Maybe<Scalars['String']>;
  workingHours: Array<WorkingHoursForDayOfWeek>;
};

export type LocationSearchResultsForCard = {
  __typename?: 'LocationSearchResultsForCard';
  locations: Array<Location>;
  locationsForCard: Array<LocationOnListForCard>;
};

export enum LocationSortOrder {
  Distance = 'DISTANCE',
  Rating = 'RATING'
}

export type LocationType = {
  __typename?: 'LocationType';
  id: Scalars['ID'];
  idPath: Array<Scalars['ID']>;
  imagePath?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  name: Scalars['String'];
  namePath: Array<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type LocationTypeBase = {
  __typename?: 'LocationTypeBase';
  id: Scalars['ID'];
  imagePath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type LocationTypeTree = {
  __typename?: 'LocationTypeTree';
  children?: Maybe<Array<LocationTypeTree>>;
  locationType: LocationType;
};

export type LocationView = {
  __typename?: 'LocationView';
  createdAt: Scalars['DateTime'];
  locationId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MenuSection = {
  __typename?: 'MenuSection';
  dishes: Array<DishOnMenu>;
  menuSections: Array<MenuSection>;
  menuTitle?: Maybe<MenuTitle>;
};

export type MenuSectionForCard = {
  __typename?: 'MenuSectionForCard';
  dishes: Array<DishOnMenuForCard>;
  menuSections: Array<MenuSectionForCard>;
  menuTitle?: Maybe<MenuTitle>;
};

export type MenuTitle = {
  __typename?: 'MenuTitle';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<Scalars['Void']>;
  connectFacebookAccount: User;
  createCard: Card;
  deleteCard?: Maybe<Scalars['Void']>;
  deleteUser?: Maybe<Scalars['Void']>;
  duplicateCard: Card;
  duplicateSharedCard: Card;
  loginWithApple: UserAndTokens;
  loginWithEmail: UserAndTokens;
  loginWithFacebook: UserAndTokens;
  loginWithGoogle: UserAndTokens;
  rateDish: RateDishResponse;
  refreshAccessToken: Scalars['String'];
  resetPassword: UserAndTokens;
  sendChangePasswordToken?: Maybe<Scalars['Void']>;
  sendResetPasswordToken?: Maybe<Scalars['Void']>;
  shareCard: Scalars['String'];
  signUpWithApple: UserAndTokens;
  signUpWithEmail: UserAndTokens;
  signUpWithFacebook: UserAndTokens;
  signUpWithGoogle: UserAndTokens;
  unshareCard?: Maybe<Scalars['Void']>;
  updateCard: Card;
  updateUser: User;
  viewDish?: Maybe<Scalars['Void']>;
  viewLocation?: Maybe<Scalars['Void']>;
};


export type MutationChangePasswordArgs = {
  code: Scalars['NonEmptyString'];
  password: Scalars['Password'];
};


export type MutationConnectFacebookAccountArgs = {
  facebookAccessToken: Scalars['NonEmptyString'];
};


export type MutationCreateCardArgs = {
  data: CardInput;
};


export type MutationDeleteCardArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateCardArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateSharedCardArgs = {
  shareCode: Scalars['String'];
};


export type MutationLoginWithAppleArgs = {
  appleIdToken: Scalars['NonEmptyString'];
};


export type MutationLoginWithEmailArgs = {
  email: Scalars['EmailAddress'];
  password: Scalars['NonEmptyString'];
};


export type MutationLoginWithFacebookArgs = {
  facebookAccessToken: Scalars['NonEmptyString'];
};


export type MutationLoginWithGoogleArgs = {
  googleIdToken: Scalars['NonEmptyString'];
};


export type MutationRateDishArgs = {
  id: Scalars['ID'];
  rating: Scalars['Rating'];
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['NonEmptyString'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['NonEmptyString'];
  email: Scalars['EmailAddress'];
  password: Scalars['Password'];
};


export type MutationSendResetPasswordTokenArgs = {
  email: Scalars['EmailAddress'];
};


export type MutationShareCardArgs = {
  id: Scalars['ID'];
};


export type MutationSignUpWithAppleArgs = {
  appleIdToken: Scalars['NonEmptyString'];
  name: Scalars['NonEmptyString'];
};


export type MutationSignUpWithEmailArgs = {
  email: Scalars['EmailAddress'];
  name: Scalars['NonEmptyString'];
  password: Scalars['Password'];
};


export type MutationSignUpWithFacebookArgs = {
  email: Scalars['EmailAddress'];
  facebookAccessToken: Scalars['NonEmptyString'];
};


export type MutationSignUpWithGoogleArgs = {
  googleIdToken: Scalars['NonEmptyString'];
};


export type MutationUnshareCardArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCardArgs = {
  data: CardInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['EmailAddress'];
  name: Scalars['NonEmptyString'];
};


export type MutationViewDishArgs = {
  id: Scalars['ID'];
};


export type MutationViewLocationArgs = {
  id: Scalars['ID'];
};

export type PaginationInput = {
  limit: Scalars['Limit'];
  offset: Scalars['Offset'];
};

export type Query = {
  __typename?: 'Query';
  card: Card;
  cards: Array<Card>;
  courseTypeTree: Array<CourseTypeTree>;
  cuisineTypeTree: Array<CuisineTypeTree>;
  dietCategories: Array<DietCategoryWithDiets>;
  dishCountForFilters: Scalars['Int'];
  dishCountsByDishTypeForCard: Array<DishCountForDishType>;
  dishCountsByLocationCuisineTypeForCard: Array<DishCountForLocationCuisineType>;
  dishCountsByLocationTypeForCard: Array<DishCountForLocationType>;
  dishDetails: DishDetails;
  dishDetailsForCard: DishDetailsForCard;
  dishTypeTree: Array<DishTypeTree>;
  dishesForCard: DishListForCard;
  ingredientComponentIngredients: Array<Ingredient>;
  ingredientComponentIngredientsForCard: Array<IngredientForCard>;
  ingredientTree: Array<IngredientTree>;
  isExistingUserByAppleId: Scalars['Boolean'];
  isExistingUserByEmail: Scalars['Boolean'];
  isExistingUserByFacebookId: Scalars['Boolean'];
  isExistingUserByGoogleId: Scalars['Boolean'];
  locationDetails: LocationDetails;
  locationDetailsForCard: LocationDetailsForCard;
  locationTypeTree: Array<LocationTypeTree>;
  locationsForCard: LocationListForCard;
  neighbourhood: Scalars['String'];
  ratedDishes: DishListForRated;
  searchCourseTypes: Array<CourseType>;
  searchCuisineTypes: Array<CuisineType>;
  searchDiets: Array<DietWithCategory>;
  searchDishTypes: Array<DishType>;
  searchIngredients: Array<Ingredient>;
  searchLocationTypes: Array<LocationType>;
  searchLocationsForCard: LocationSearchResultsForCard;
  sharedCard: SharedCard;
  user: User;
  viewedDishes: DishListForViewed;
  viewedLocations: LocationListForViewed;
};


export type QueryCardArgs = {
  id: Scalars['ID'];
};


export type QueryDishCountForFiltersArgs = {
  cardFilters: CardFiltersInput;
  coordinates: CoordinatesInput;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishCountsByDishTypeForCardArgs = {
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  dishTypeId?: InputMaybe<Scalars['ID']>;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishCountsByLocationCuisineTypeForCardArgs = {
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  locationCuisineTypeId?: InputMaybe<Scalars['ID']>;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishCountsByLocationTypeForCardArgs = {
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  locationTypeId?: InputMaybe<Scalars['ID']>;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishDetailsArgs = {
  coordinates: CoordinatesInput;
  id: Scalars['ID'];
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishDetailsForCardArgs = {
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  id: Scalars['ID'];
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryDishesForCardArgs = {
  browsingFilters: BrowsingFiltersInput;
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  pagination: PaginationInput;
  sortOrder: DishSortOrder;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryIngredientComponentIngredientsArgs = {
  id: Scalars['ID'];
};


export type QueryIngredientComponentIngredientsForCardArgs = {
  cardId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QueryIsExistingUserByAppleIdArgs = {
  appleId: Scalars['String'];
};


export type QueryIsExistingUserByEmailArgs = {
  email: Scalars['EmailAddress'];
};


export type QueryIsExistingUserByFacebookIdArgs = {
  facebookId: Scalars['String'];
};


export type QueryIsExistingUserByGoogleIdArgs = {
  googleId: Scalars['String'];
};


export type QueryLocationDetailsArgs = {
  coordinates: CoordinatesInput;
  id: Scalars['ID'];
};


export type QueryLocationDetailsForCardArgs = {
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  id: Scalars['ID'];
};


export type QueryLocationsForCardArgs = {
  browsingFilters: BrowsingFiltersInput;
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  pagination: PaginationInput;
  sortOrder: DishSortOrder;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QueryNeighbourhoodArgs = {
  coordinates: CoordinatesInput;
};


export type QueryRatedDishesArgs = {
  coordinates: CoordinatesInput;
  pagination: PaginationInput;
  sortOrder: RatedDishSortOrder;
};


export type QuerySearchCourseTypesArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchCuisineTypesArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchDietsArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchDishTypesArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchIngredientsArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchLocationTypesArgs = {
  limit: Scalars['Limit'];
  searchTerm: Scalars['String'];
};


export type QuerySearchLocationsForCardArgs = {
  browsingFilters: BrowsingFiltersInput;
  cardId: Scalars['ID'];
  coordinates: CoordinatesInput;
  limit: Scalars['Limit'];
  searchTerm: Scalars['NonEmptyString'];
  sortOrder: DishSortOrder;
  timeAndLocationFilters: TimeAndLocationFiltersInput;
};


export type QuerySharedCardArgs = {
  shareCode: Scalars['NonEmptyString'];
};


export type QueryViewedDishesArgs = {
  coordinates: CoordinatesInput;
  pagination: PaginationInput;
  sortOrder: ViewedDishSortOrder;
};


export type QueryViewedLocationsArgs = {
  coordinates: CoordinatesInput;
  pagination: PaginationInput;
  sortOrder: ViewedDishSortOrder;
};

export type RateDishResponse = {
  __typename?: 'RateDishResponse';
  avgRating: Scalars['Float'];
  ratingCount: Scalars['Int'];
};

export enum RatedDishSortOrder {
  Distance = 'DISTANCE',
  Rating = 'RATING',
  Time = 'TIME'
}

export type SharedCard = {
  __typename?: 'SharedCard';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shareCode: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

export type SourceCard = {
  __typename?: 'SourceCard';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

export type TimeAndLocationFiltersInput = {
  maxDistance?: InputMaybe<Scalars['Int']>;
  openAt?: InputMaybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  appleId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  facebookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserAndTokens = {
  __typename?: 'UserAndTokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export enum ViewedDishSortOrder {
  Distance = 'DISTANCE',
  Rating = 'RATING',
  Time = 'TIME'
}

export enum ViewedLocationSortOrder {
  Distance = 'DISTANCE',
  Rating = 'RATING',
  Time = 'TIME'
}

export type WorkingHoursForDayOfWeek = {
  __typename?: 'WorkingHoursForDayOfWeek';
  dayOfWeek: Scalars['Int'];
  intervals: Array<WorkingHoursInterval>;
};

export type WorkingHoursInterval = {
  __typename?: 'WorkingHoursInterval';
  closeTime: Scalars['LocalTime'];
  openTime: Scalars['LocalTime'];
};

export type AddNewCardMutationVariables = Exact<{
  name: Scalars['NonEmptyString'];
}>;


export type AddNewCardMutation = { __typename?: 'Mutation', createCard: { __typename?: 'Card', name: string, id: string, shareCode?: string | null } };

export type DeleteCardMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteCardMutation = { __typename?: 'Mutation', deleteCard?: any | null };

export type DuplicateCardMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DuplicateCardMutation = { __typename?: 'Mutation', duplicateCard: { __typename?: 'Card', id: string, name: string } };

export type ShareCardMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type ShareCardMutation = { __typename?: 'Mutation', shareCard: string };

export type SignInMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  password: Scalars['NonEmptyString'];
}>;


export type SignInMutation = { __typename?: 'Mutation', loginWithEmail: { __typename?: 'UserAndTokens', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, email: any, name: string } } };

export type GetAllCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCardsQuery = { __typename?: 'Query', cards: Array<{ __typename?: 'Card', id: string, name: string, shareCode?: string | null }> };


export const AddNewCardDocument = gql`
    mutation AddNewCard($name: NonEmptyString!) {
  createCard(
    data: {name: $name, locationCuisineTypeIds: [], dishTypeIds: [], courseTypeIds: [], dietIds: [], excludedIngredientIds: [], locationTypeIds: []}
  ) {
    name
    id
    shareCode
  }
}
    `;
export type AddNewCardMutationFn = Apollo.MutationFunction<AddNewCardMutation, AddNewCardMutationVariables>;

/**
 * __useAddNewCardMutation__
 *
 * To run a mutation, you first call `useAddNewCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewCardMutation, { data, loading, error }] = useAddNewCardMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddNewCardMutation(baseOptions?: Apollo.MutationHookOptions<AddNewCardMutation, AddNewCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewCardMutation, AddNewCardMutationVariables>(AddNewCardDocument, options);
      }
export type AddNewCardMutationHookResult = ReturnType<typeof useAddNewCardMutation>;
export type AddNewCardMutationResult = Apollo.MutationResult<AddNewCardMutation>;
export type AddNewCardMutationOptions = Apollo.BaseMutationOptions<AddNewCardMutation, AddNewCardMutationVariables>;
export const DeleteCardDocument = gql`
    mutation DeleteCard($id: ID = "") {
  deleteCard(id: $id)
}
    `;
export type DeleteCardMutationFn = Apollo.MutationFunction<DeleteCardMutation, DeleteCardMutationVariables>;

/**
 * __useDeleteCardMutation__
 *
 * To run a mutation, you first call `useDeleteCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCardMutation, { data, loading, error }] = useDeleteCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCardMutation, DeleteCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCardMutation, DeleteCardMutationVariables>(DeleteCardDocument, options);
      }
export type DeleteCardMutationHookResult = ReturnType<typeof useDeleteCardMutation>;
export type DeleteCardMutationResult = Apollo.MutationResult<DeleteCardMutation>;
export type DeleteCardMutationOptions = Apollo.BaseMutationOptions<DeleteCardMutation, DeleteCardMutationVariables>;
export const DuplicateCardDocument = gql`
    mutation DuplicateCard($id: ID = "") {
  duplicateCard(id: $id) {
    id
    name
  }
}
    `;
export type DuplicateCardMutationFn = Apollo.MutationFunction<DuplicateCardMutation, DuplicateCardMutationVariables>;

/**
 * __useDuplicateCardMutation__
 *
 * To run a mutation, you first call `useDuplicateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCardMutation, { data, loading, error }] = useDuplicateCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCardMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCardMutation, DuplicateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCardMutation, DuplicateCardMutationVariables>(DuplicateCardDocument, options);
      }
export type DuplicateCardMutationHookResult = ReturnType<typeof useDuplicateCardMutation>;
export type DuplicateCardMutationResult = Apollo.MutationResult<DuplicateCardMutation>;
export type DuplicateCardMutationOptions = Apollo.BaseMutationOptions<DuplicateCardMutation, DuplicateCardMutationVariables>;
export const ShareCardDocument = gql`
    mutation ShareCard($id: ID = "") {
  shareCard(id: $id)
}
    `;
export type ShareCardMutationFn = Apollo.MutationFunction<ShareCardMutation, ShareCardMutationVariables>;

/**
 * __useShareCardMutation__
 *
 * To run a mutation, you first call `useShareCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareCardMutation, { data, loading, error }] = useShareCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShareCardMutation(baseOptions?: Apollo.MutationHookOptions<ShareCardMutation, ShareCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShareCardMutation, ShareCardMutationVariables>(ShareCardDocument, options);
      }
export type ShareCardMutationHookResult = ReturnType<typeof useShareCardMutation>;
export type ShareCardMutationResult = Apollo.MutationResult<ShareCardMutation>;
export type ShareCardMutationOptions = Apollo.BaseMutationOptions<ShareCardMutation, ShareCardMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: EmailAddress!, $password: NonEmptyString!) {
  loginWithEmail(email: $email, password: $password) {
    user {
      id
      email
      name
    }
    accessToken
    refreshToken
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const GetAllCardsDocument = gql`
    query GetAllCards {
  cards {
    id
    name
    shareCode
  }
}
    `;

/**
 * __useGetAllCardsQuery__
 *
 * To run a query within a React component, call `useGetAllCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
      }
export function useGetAllCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
        }
export type GetAllCardsQueryHookResult = ReturnType<typeof useGetAllCardsQuery>;
export type GetAllCardsLazyQueryHookResult = ReturnType<typeof useGetAllCardsLazyQuery>;
export type GetAllCardsQueryResult = Apollo.QueryResult<GetAllCardsQuery, GetAllCardsQueryVariables>;