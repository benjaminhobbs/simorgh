import React, { useContext } from 'react';
import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import styled from '@emotion/styled';
import { string, node } from 'prop-types';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_ABOVE_400PX,
  GEL_MARGIN_BELOW_400PX,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
  GEL_SPACING_QUIN,
} from '@bbc/gel-foundations/spacings';
import { C_GREY_2 } from '@bbc/psammead-styles/colours';
import { articleDataPropTypes } from '#models/propTypes/article';
import ArticleMetadata from '#containers/ArticleMetadata';
import { ServiceContext } from '#contexts/ServiceContext';
import headings from '#containers/Headings';
import gist from '#containers/Gist';
import text from '#containers/Text';
import Image from '#containers/Image';
import Disclaimer from '#containers/Disclaimer';
import Blocks from '#containers/Blocks';
import timestamp from '#containers/ArticleTimestamp';
import Grid, { GelPageGrid, GridItemLarge } from '#components/Grid';
import ATIAnalytics from '#containers/ATIAnalytics';
import ChartbeatAnalytics from '#containers/ChartbeatAnalytics';
import ComscoreAnalytics from '#containers/ComscoreAnalytics';
import articleMediaPlayer from '#containers/ArticleMediaPlayer';
import LinkedData from '#containers/LinkedData';
import MostReadContainer from '#containers/MostRead';
import MostReadSection from '#containers/MostRead/section';
import MostReadSectionLabel from '#containers/MostRead/label';
import SocialEmbedContainer from '#containers/SocialEmbed';
import {
  getArticleId,
  getHeadline,
  getSummary,
  getFirstPublished,
  getLastPublished,
  getAboutTags,
  getArticleSection,
  getMentions,
  getLang,
} from '#lib/utilities/parseAssetData';
import filterForBlockType from '#lib/utilities/blockHandlers';
import RelatedTopics from '#containers/RelatedTopics';
import NielsenAnalytics from '#containers/NielsenAnalytics';
import TopStories from '#containers/CpsTopStories';
import FeaturesAnalysis from '#containers/CpsFeaturesAnalysis';

const componentsToRender = {
  headline: headings,
  subheadline: headings,
  audio: articleMediaPlayer,
  video: articleMediaPlayer,
  text,
  image: props => <Image {...props} sizes="(min-width: 1008px) 760px, 100vw" />,
  timestamp,
  social: SocialEmbedContainer,
  group: gist,
};

const ArticlePageMostReadSection = styled(MostReadSection)`
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    margin: 0 ${GEL_MARGIN_BELOW_400PX} ${GEL_SPACING_TRPL};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    margin: 0 ${GEL_MARGIN_ABOVE_400PX} ${GEL_SPACING_QUAD};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    margin: 0 ${GEL_MARGIN_ABOVE_400PX} ${GEL_SPACING_QUIN};
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    width: 100%; /* Needed for IE11 */
    margin: 0 auto ${GEL_SPACING_TRPL};
    padding: 0 ${GEL_SPACING_DBL};
    max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  }
`;

const Main = styled.main`
  background-color: ${C_GREY_2};
  padding-bottom: ${GEL_SPACING_TRPL};
`;

const StyledRelatedTopics = styled(RelatedTopics)`
  margin-top: ${GEL_SPACING_DBL};
  padding-bottom: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_QUAD};
    padding-bottom: ${GEL_SPACING_QUAD};
  }
`;

const ArticlePage = ({ pageData, mostReadEndpointOverride }) => {
  const { articleAuthor, showRelatedTopics, serviceLang } = useContext(
    ServiceContext,
  );
  const headline = getHeadline(pageData);
  const description = getSummary(pageData) || getHeadline(pageData);
  const firstPublished = getFirstPublished(pageData);
  const lastPublished = getLastPublished(pageData);
  const aboutTags = getAboutTags(pageData);
  const topics = path(['metadata', 'topics'], pageData);
  const topStoriesInitialData = path(
    ['secondaryColumn', 'topStories'],
    pageData,
  );
  const featuresInitialData = path(['secondaryColumn', 'features'], pageData);

  const promoImageBlocks = pathOr(
    [],
    ['promo', 'images', 'defaultPromoImage', 'blocks'],
    pageData,
  );

  const promoImageAltText = path(
    ['model', 'blocks', 0, 'model', 'blocks', 0, 'model', 'text'],
    filterForBlockType(promoImageBlocks, 'altText'),
  );

  const promoImage = path(
    ['model', 'locator'],
    filterForBlockType(promoImageBlocks, 'rawImage'),
  );

  const MostReadWrapper = ({ children }) => (
    <ArticlePageMostReadSection>
      <MostReadSectionLabel mobileDivider={showRelatedTopics && topics} />
      {children}
    </ArticlePageMostReadSection>
  );

  MostReadWrapper.propTypes = {
    children: node.isRequired,
  };

  const gridColumns = {
    group0: 8,
    group1: 8,
    group2: 8,
    group3: 8,
    group4: 12,
    group5: 12,
  };

  const gridMargins = {
    group0: false,
    group1: false,
    group2: false,
    group3: false,
    group4: true,
    group5: true,
  };

  const gridOffset = {
    group0: 1,
    group1: 1,
    group2: 1,
    group3: 1,
    group4: 1,
    group5: 1,
  };

  const gridColsMain = {
    group0: 8,
    group1: 8,
    group2: 8,
    group3: 8,
    group4: 8,
    group5: 8,
  };

  const gridColsSecondary = {
    group0: 8,
    group1: 8,
    group2: 8,
    group3: 8,
    group4: 4,
    group5: 4,
  };

  // Firefox specific styling to prevent content from overflowing on smaller resolutions
  const GridPrimaryColumn = styled(Grid)`
    @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
      width: 100%;
    }
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      width: 100%;
    }
    padding-bottom: ${GEL_SPACING_QUAD};
  `;

  const GridSecondaryColumn = styled(Grid)`
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      margin-top: ${GEL_SPACING_QUAD};
    }
  `;

  const ComponentWrapper = styled.div`
    margin-bottom: ${GEL_SPACING_TRPL};
    padding: ${GEL_SPACING_DBL};
  `;

  /**
   * this should be the defacto wrapper for OJs
   * as it displays a conditional padding, which
   * works well for mobile view.
   */
  const ResponsiveComponentWrapper = styled.div`
    margin-bottom: ${GEL_SPACING_TRPL};
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      margin-bottom: ${GEL_SPACING};
      padding: ${GEL_SPACING_DBL};
    }
  `;

  const ArticlePageGrid = ({ children }) => (
    <GelPageGrid enableGelGutters columns={gridColumns} margins={gridMargins}>
      {children}
    </GelPageGrid>
  );

  ArticlePageGrid.propTypes = {
    children: node.isRequired,
  };

  return (
    <>
      <ATIAnalytics data={pageData} />
      <ChartbeatAnalytics data={pageData} />
      <ComscoreAnalytics />
      <NielsenAnalytics />
      <ArticleMetadata
        articleId={getArticleId(pageData)}
        title={headline}
        author={articleAuthor}
        firstPublished={firstPublished}
        lastPublished={lastPublished}
        section={getArticleSection(pageData)}
        aboutTags={aboutTags}
        mentionsTags={getMentions(pageData)}
        lang={getLang(pageData)}
        description={description}
        imageLocator={promoImage}
        imageAltText={promoImageAltText}
      />
      <LinkedData
        showAuthor
        type="Article"
        seoTitle={headline}
        headline={headline}
        datePublished={firstPublished}
        dateModified={lastPublished}
        aboutTags={aboutTags}
        imageLocator={promoImage}
      />
      <ArticlePageGrid>
        <GridPrimaryColumn
          item
          columns={gridColsMain}
          startOffset={gridOffset}
          parentColumns={gridColumns}
        >
          <Main role="main">
            <Disclaimer />
            <Blocks
              blocks={path(['content', 'model', 'blocks'], pageData)}
              componentsToRender={componentsToRender}
            />
          </Main>

          {showRelatedTopics && topics && (
            <GridItemLarge>
              <StyledRelatedTopics
                topics={topics}
                mobileDivider={false}
                bar={false}
              />
            </GridItemLarge>
          )}
        </GridPrimaryColumn>
        <GridSecondaryColumn
          item
          columns={gridColsSecondary}
          parentColumns={gridColumns}
          // `serviceLang` is defined when the language the page is written in is different to the
          // language of the service. `serviceLang` is used to override the page language.
          lang={serviceLang}
        >
          {topStoriesInitialData && (
            <ResponsiveComponentWrapper>
              <TopStories
                content={topStoriesInitialData}
                parentColumns={gridColsSecondary}
              />
            </ResponsiveComponentWrapper>
          )}
          {featuresInitialData && (
            <ResponsiveComponentWrapper>
              <FeaturesAnalysis
                content={featuresInitialData}
                parentColumns={gridColsSecondary}
              />
            </ResponsiveComponentWrapper>
          )}
          <ComponentWrapper>
            <MostReadContainer
              mostReadEndpointOverride={mostReadEndpointOverride}
              columnLayout="oneColumn"
              wrapper={MostReadWrapper}
            />
          </ComponentWrapper>
        </GridSecondaryColumn>
      </ArticlePageGrid>
    </>
  );
};
ArticlePage.propTypes = {
  pageData: articleDataPropTypes.isRequired,
  mostReadEndpointOverride: string,
};

ArticlePage.defaultProps = {
  mostReadEndpointOverride: null,
};

export default ArticlePage;
