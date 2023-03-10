/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * REST_API
 * BackEndのREST API仕様です
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
/**
 * Commentオブジェクト
 */
export type MarkerById200Comment = {
  /** ID */
  id?: number;
  /** コメント文字列 */
  comment?: string;
};

/**
 * Markerオブジェクト
 */
export type MarkerById200 = {
  /** ID */
  id: number;
  /** 登録日付(Unixミリ秒) */
  datetime: number;
  /** 緯度(latitude) */
  lat?: number;
  /** 経度(longitude) */
  lng?: number;
  /** 高度(altitude) */
  alt?: number;
  /** Commentオブジェクト */
  comment?: MarkerById200Comment;
  /** 画像ID */
  imageId?: number;
};

/**
 * Commentオブジェクト
 */
export type MarkerCreate200Comment = {
  /** ID */
  id?: number;
  /** コメント文字列 */
  comment?: string;
};

/**
 * Markerオブジェクト
 */
export type MarkerCreate200 = {
  /** ID */
  id: number;
  /** 登録日付(Unixミリ秒) */
  datetime: number;
  /** 緯度(latitude) */
  lat?: number;
  /** 経度(longitude) */
  lng?: number;
  /** 高度(altitude) */
  alt?: number;
  /** Commentオブジェクト */
  comment?: MarkerCreate200Comment;
  /** 画像ID */
  imageId?: number;
};

/**
 * Commentオブジェクト
 */
export type MarkerCreateBodyComment = {
  /** ID */
  id?: number;
  /** コメント文字列 */
  comment?: string;
};

export type MarkerCreateBody = {
  /** 登録日付(Unixミリ秒) */
  datetime: number;
  /** 緯度(latitude) */
  lat?: number;
  /** 経度(longitude) */
  lng?: number;
  /** 高度(altitude) */
  alt?: number;
  /** Commentオブジェクト */
  comment?: MarkerCreateBodyComment;
  /** 画像ID */
  imageId?: number;
};





  /**
 * Marker登録APIです
 * @summary Marker登録API
 */
export const markerCreate = <TData = AxiosResponse<MarkerCreate200>>(
    markerCreateBody: MarkerCreateBody, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/marker/create`,
      markerCreateBody,options
    );
  }

/**
 * Marker取得API(ID指定)です
 * @summary Marker取得API(ID指定)
 */
export const markerById = <TData = AxiosResponse<MarkerById200>>(
    id: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/marker/${id}`,options
    );
  }

export type MarkerCreateResult = AxiosResponse<MarkerCreate200>
export type MarkerByIdResult = AxiosResponse<MarkerById200>
