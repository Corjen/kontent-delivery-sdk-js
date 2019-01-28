import { Observable } from 'rxjs';

import { IContentManagementClientConfig } from '../../config';
import { ContentTypeSnippetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListContentTypeSnippetsQuery extends BaseQuery<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {

  constructor(
    protected config: IContentManagementClientConfig,
    protected queryService: ContentManagementQueryService
  ) {
    super(config, queryService);
  }

  toObservable(): Observable<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {
    return this.queryService.listContentTypeSnippets(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.actions.contentItemActions.listContentTypeSnippets();
  }
}
