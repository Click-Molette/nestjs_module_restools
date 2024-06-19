import { RequestContextStorage } from '../request-context.storage'

export interface TestRequest {
  requestId: number
}

export class TestContext {
  static get(): RequestContextStorage<TestRequest> {
    return RequestContextStorage.currentContext
  }
}
