import { Fields, ItemResponses, sdkInfo } from '../../../lib';
import { Actor, Context, MockQueryService, Movie, setup, warriorMovieJson } from '../../setup';
import { HttpService } from 'kentico-cloud-core';

describe('Field types', () => {

  const context = new Context();
  setup(context);

  const mockQueryService = new MockQueryService(context.getConfig(), new HttpService(), {
    host: sdkInfo.host,
    name: sdkInfo.name,
    version: sdkInfo.version
  });

  let response: ItemResponses.DeliveryItemResponse<Movie>;

  beforeAll((done) => {
    response = mockQueryService.mockGetSingleItem<Movie>(warriorMovieJson, {});
    done();
  });

  it(`check 'TextField' type`, () => {
    expect(response.item.title).toEqual(jasmine.any(Fields.TextField));
  });

  it(`check 'RichTextField' type`, () => {
    expect(response.item.plot).toEqual(jasmine.any(Fields.RichTextField));
  });

  it(`check 'DateTimeField' type`, () => {
    expect(response.item.released).toEqual(jasmine.any(Fields.DateTimeField));
  });

  it(`check 'NumberField' type`, () => {
    expect(response.item.length).toEqual(jasmine.any(Fields.NumberField));
  });

  it(`check 'MultipleChoiceField' type`, () => {
    expect(response.item.category).toEqual(jasmine.any(Fields.MultipleChoiceField));
  });

  it(`check that 'stars' property contains objects of 'Actor' type`, () => {
    expect(response.item.stars[0]).toEqual(jasmine.any(Actor));
  });

  it(`check 'UrlSlugField' type`, () => {
    expect(response.item.seoname).toEqual(jasmine.any(Fields.UrlSlugField));
  });
});

