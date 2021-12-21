import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/markets",
                        content: "Visit Markets data »",
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/sports",
                        content: "Visit Sports page »",
                    }}
                >
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <MiniStory key={data.id} {...data} />
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    gap: 48px;

    @media ${QUERIES.laptopAndUp} {
        gap: 0;
        grid-template-columns: 1fr 1fr;
    }
`;

const MarketsSection = styled.section`
    @media ${QUERIES.laptopAndUp} {
        padding-right: 16px;
        border-right: 1px solid ${COLORS.gray[300]};
    }
`;

const MarketCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
`;

const SportsSection = styled.section`
    @media ${QUERIES.laptopAndUp} {
        padding-left: 16px;
    }
`;

const SportsStories = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    @media ${QUERIES.tabletAndUp} {
        display: flex;
        overflow: auto;

        & > * {
            flex: 1 0 180px;
        }
    }
`;

export default SpecialtyStoryGrid;
