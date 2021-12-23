import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <VerticalStoryWrapper key={story.id}>
                            <SecondaryStory {...story} />
                        </VerticalStoryWrapper>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <VerticalStoryWrapper key={story.id}>
                            <OpinionStory key={story.id} {...story} />
                        </VerticalStoryWrapper>
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "main-story"
        "secondary-stories"
        "opinion-stories"
        "advertisement";
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-columns: 2fr 1fr;
        gap: 0;
        grid-template-areas:
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories opinion-stories";
    }

    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: 46% 33% 21%;
        gap: 0;
        grid-template-areas:
            "main-story secondary-stories opinion-stories"
            "main-story advertisement advertisement";
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;

    @media ${QUERIES.tabletAndUp} {
        padding-right: 16px;
        border-right: 1px solid ${COLORS.gray[300]};
    }
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;

    @media ${QUERIES.tabletAndUp} {
        padding-left: 16px;
    }

    @media ${QUERIES.laptopAndUp} {
        padding-right: 16px;
        border-right: 1px solid ${COLORS.gray[300]};
    }
`;

const VerticalStoryWrapper = styled.div`
    &:not(:last-of-type) {
        border-bottom: 1px solid ${COLORS.gray[300]};
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    @media ${QUERIES.laptopAndUp} {
        padding-left: 16px;
    }
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;

    /*& > a {
        border-bottom: 1px solid ${COLORS.gray[300]};
        padding: 16px 0;

        &:first-of-type {
            padding-top: 0;
        }

        &:last-of-type {
            border: 0;
            padding-bottom: 0;
        }
    }*/

    @media ${QUERIES.tabletOnly} {
        ${OpinionSection} & {
            flex-direction: row;
            gap: 32px;
        }

        ${OpinionSection} & > a {
            padding: 0;
            border: 0;
        }
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;

    @media ${QUERIES.tabletOnly} {
        margin: 48px 0;
    }

    @media ${QUERIES.laptopAndUp} {
        margin: 16px 0 0 16px;

        & > div {
            padding-top: 4px;
            border-top: 1px solid ${COLORS.gray[300]};
        }
    }
`;

export default MainStoryGrid;
