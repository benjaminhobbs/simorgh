import * as genericLabelHelpers from '#lib/analyticsUtils';

const { buildATIPageTrackPath, buildATIEventTrackUrl } = require('.');

const mockAndSet = ({ name, source }, response) => {
  source[name] = jest.fn(); // eslint-disable-line no-param-reassign
  source[name].mockImplementation(() => response);
};

const splitUrl = url => url.replace(/&/g, ',').replace(/\?/g, ',').split(',');

const analyticsUtilFunctions = [
  { name: 'getDestination', source: genericLabelHelpers },
  { name: 'getAppType', source: genericLabelHelpers },
  { name: 'getScreenInfo', source: genericLabelHelpers },
  { name: 'getBrowserViewPort', source: genericLabelHelpers },
  { name: 'getCurrentTime', source: genericLabelHelpers },
  { name: 'getDeviceLanguage', source: genericLabelHelpers },
  { name: 'getHref', source: genericLabelHelpers },
  { name: 'getReferrer', source: genericLabelHelpers },
  { name: 'getAtUserId', source: genericLabelHelpers },
  { name: 'getATIMarketingString,', source: genericLabelHelpers },
  { name: 'isLocServeCookieSet', source: genericLabelHelpers },
  { name: 'sanitise', source: genericLabelHelpers },
];

const marketingCampaignFunc = {
  name: 'getCampaignType',
  source: genericLabelHelpers,
};

const rssMarketingStringFunc = {
  name: 'getRSSMarketingString',
  source: genericLabelHelpers,
};

describe('getThingAttributes', () => {
  beforeEach(() => {
    analyticsUtilFunctions.push(marketingCampaignFunc);
    analyticsUtilFunctions.push(rssMarketingStringFunc);
    analyticsUtilFunctions.forEach(func => {
      mockAndSet(func, null);
    });
    mockAndSet(rssMarketingStringFunc, []);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should not add empty or null values', () => {
    expect(buildATIPageTrackPath({})).toEqual('');
  });

  it('should take in optional props and add them as correct query params', () => {
    mockAndSet(marketingCampaignFunc, 'sl');

    const queryParams = buildATIPageTrackPath({
      appName: 'appName',
      contentId: 'contentId',
      contentType: 'contentType',
      language: 'language',
      ldpThingIds: 'ldpThingIds',
      ldpThingLabels: 'ldpThingLabels',
      pageIdentifier: 'pageIdentifier',
      pageTitle: 'pageTitle',
      platform: 'platform',
      producerId: 'producerId',
      timePublished: 'timePublished',
      timeUpdated: 'timeUpdated',
    });

    const queryParamsArray = splitUrl(queryParams);
    const expectedValues = [
      's2=producerId',
      'p=pageIdentifier',
      'x1=[contentId]',
      'x3=[appName]',
      'x4=[language]',
      'x7=[contentType]',
      'x11=[timePublished]',
      'x12=[timeUpdated]',
      'x13=[ldpThingLabels]',
      'x14=[ldpThingIds]',
      'xto=SEC------',
    ];

    expect(queryParamsArray).toHaveLength(expectedValues.length);
    expectedValues.forEach(value => expect(queryParamsArray).toContain(value));
  });

  it('should call RSS marketing string function', () => {
    mockAndSet(marketingCampaignFunc, 'RSS');
    mockAndSet(rssMarketingStringFunc, [
      {
        key: 'src_medium',
        description: 'rss campaign prefix',
        value: 'RSS',
        wrap: false,
      },
    ]);

    const queryParams = buildATIPageTrackPath({});

    const queryParamsArray = splitUrl(queryParams);
    const expectedValues = ['src_medium=RSS'];

    expectedValues.forEach(value => expect(queryParamsArray).toContain(value));
  });

  it('should call relevant functions', () => {
    analyticsUtilFunctions.forEach(func => {
      mockAndSet(func, func.name);
    });

    mockAndSet(marketingCampaignFunc, 'email');

    const queryParams = buildATIPageTrackPath({
      pageTitle: 'pageTitle',
      platform: 'platform',
      service: 'service',
      statsDestination: 'statsDestination',
    });

    const queryParamsArray = splitUrl(queryParams);

    expect(queryParamsArray).toMatchInlineSnapshot(`
      Array [
        "s=getDestination",
        "idclient=getAtUserId",
        "r=getScreenInfo",
        "re=getBrowserViewPort",
        "hl=getCurrentTime",
        "lng=getDeviceLanguage",
        "x2=[getAppType]",
        "x5=[getHref]",
        "x6=[getReferrer]",
        "x9=[sanitise]",
        "x18=[isLocServeCookieSet]",
        "xto=-----%40",
        "ref=getReferrer",
      ]
    `);
  });
});

describe('buildATIEventTrackUrl', () => {
  beforeEach(() => {
    analyticsUtilFunctions.forEach(func => {
      mockAndSet(func, func.name);
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the right url', () => {
    process.env.SIMORGH_ATI_BASE_URL = 'http://foobar.com?';
    expect(
      buildATIEventTrackUrl({
        pageIdentifier: 'pageIdentifier',
        service: 'service',
        platform: 'platform',
        statsDestination: 'statsDestination',
        componentName: 'component',
        type: 'type',
        campaignID: 'campaignID',
        format: 'format',
        url: 'url',
      }),
    ).toMatchInlineSnapshot(
      `"http://foobar.com?idclient=getAtUserId&s=getDestination&p=pageIdentifier&r=getScreenInfo&re=getBrowserViewPort&hl=getCurrentTime&lng=getDeviceLanguage&atc=PUB-[campaignID]-[component]-[]-[format]-[pageIdentifier]-[]-[]-[url]&type=AT"`,
    );
  });
});
