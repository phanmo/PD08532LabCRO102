import React, { ReactNode } from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";

export interface SectionProps {
    title: string;
    titleStyle?: TextStyle;
    events?: EventProps[];
}

interface EventProps {
    title?: string;
    content?: string;
    titleStyle?: TextStyle;
    contentStyle?: TextStyle;
    contentComponent?: ReactNode;
    eventComponent?: ReactNode;
}

const Section = ({ title, titleStyle, events }: SectionProps) => {

    const renderChild = (data: EventProps, index: number) => {
        const { title, content, titleStyle, contentStyle, contentComponent, eventComponent } = data;
        return (
            eventComponent || (
                <View key={index.toString()} style={styles.containerChild}>
                    <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
                    {contentComponent || (
                        <Text style={[styles.contentChild, contentStyle]}>{content}</Text>
                    )}
                </View>
            )
        );
    };

    const renderSection = (data: SectionProps, index: number) => {
        const { title, events, titleStyle } = data;
        return (
            <View key={index.toString()} style={[styles.section]}>
                <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
                <View style={[styles.sectionBody, styles.shadow]}>
                    {events?.map((event, idx) => renderChild(event, idx))}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderSection({ title, titleStyle, events }, 0)}
        </View>
    );
};

export default Section;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    section: {
        marginBottom: 20,
    },
    titleSection: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionBody: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerChild: {
        marginBottom: 15,
    },
    titleChild: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 3,
    },
    contentChild: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

