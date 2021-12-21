import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <ActionGroup>
                    <button>
                        <Search size={24} />
                    </button>
                    <button>
                        <Menu size={24} />
                    </button>
                </ActionGroup>
                <Logo />
                <SubscribeGroup>
                    <Button>Subscribe</Button>
                    <a href="/login">Alredy a member?</a>
                </SubscribeGroup>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const SubscribeGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-self: baseline;

    a {
        color: ${COLORS.gray[900]};
        font-style: italic;
        text-align: center;
        text-decoration: underline;
        font-size: ${14 / 16}rem;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.laptopAndUp} {
        justify-content: space-between;
        align-items: baseline;
    }
`;

export default Header;
