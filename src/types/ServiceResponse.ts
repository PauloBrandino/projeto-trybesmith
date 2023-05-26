type SuccessType = 'OK' | 'CREATED';
type ServiceTypeError = 'INVALID_DATA';

type ServiceResponseSuccess<T> = {
  type: SuccessType,
  data: T
};

type ServiceResponseError = {
  type: ServiceTypeError,
  data: {
    message: string
  }
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;