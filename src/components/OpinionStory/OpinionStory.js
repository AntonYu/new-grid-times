import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
    return (
        <Link href={`/story/${id}`}>
            <Wrapper>
                <Avatar alt="" src={avatar} />
                <div>
                    <AuthorName>{author}</AuthorName>
                    <ArticleTitle>{title}</ArticleTitle>
                </div>
            </Wrapper>
        </Link>
    );
};

const Link = styled.a`
    @media ${QUERIES.tabletOnly} {
        flex: 1;
    }
`;

const Wrapper = styled.article`
    color: var(--color-gray-900);
    display: grid;

    @media ${QUERIES.mobile} or ${QUERIES.laptopAndUp} {
        grid-template-columns: 1fr 80px;
        grid-template-areas:
            "author avatar"
            "title avatar";
    }

    @media ${QUERIES.tabletOnly} {
        gap: 8px;
    }
`;

const Avatar = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;

    @media ${QUERIES.mobile} or ${QUERIES.laptopAndUp} {
        grid-area: avatar;
        justify-self: end;
    }
`;

const AuthorName = styled.p`
    font-size: 1.125rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-700);
    margin-bottom: 4px;

    @media ${QUERIES.mobile} or ${QUERIES.laptopAndUp} {
        grid-area: author;
    }
`;

const ArticleTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;

    @media ${QUERIES.mobile} or ${QUERIES.laptopAndUp} {
        grid-area: title;
    }
`;

export default OpinionStory;
