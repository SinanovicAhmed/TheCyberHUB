import React from "react";
import { Wrapper } from "src/components/Dashboard/Profile/ProfileElements";
import {
    SecurityContainer,
    SecurityContentList,
    SecurityContentSection,
    SecuritySubheading,
    SecurityText,
} from "./SecurityElements";
import SecurityNavigation from "./SecurityNavigation";

const Security = () => {
    const securityContent = {
        header: {
            title: "Security",
            icon: {
                type: "FaShieldAlt",
                size: 50,
                color: "#007bff",
            },
        },
        sections: [
            {
                heading: "If you discover a security vulnerability, \n" + "we want to hear about it.",
                text: "If you have discovered a security vulnerability on our website, we encourage you to report it to us as soon as possible.",
            },
            {
                heading: "Responsible Disclosure",
                text: "We take the security of our website very seriously and appreciate the contributions of security researchers to help keep our website secure. If you discover a security vulnerability, please report it to us using the contact information provided below. We ask that you please do not publicly disclose the vulnerability until we have had a chance to investigate and address the issue.",
            },
            {
                heading: "Contact Information",
                text: (
                    <>
                        If you have discovered a security vulnerability, please contact us at
                        <a style={{ color: "#00b2ff", marginRight: "-3px" }} href="mailto:info@thecyberhub.org">
                            info@thecyberhub.org
                        </a>
                        . We will do our best to respond to your report in a timely manner.
                    </>
                ),
            },
        ],
        link: {
            text: "Hall of Fame",
            to: "hall-of-fame",
        },
    };

    return (
        <Wrapper>
            <SecurityContainer>
                <SecurityNavigation heading={"Security"} />
                <SecurityContentSection>
                    {securityContent.sections.map((section, index) => (
                        <SecurityContentList key={index}>
                            <SecuritySubheading>{section.heading}</SecuritySubheading>
                            <SecurityText> {section.text}</SecurityText>
                        </SecurityContentList>
                    ))}
                </SecurityContentSection>
            </SecurityContainer>
        </Wrapper>
    );
};

export default Security;
