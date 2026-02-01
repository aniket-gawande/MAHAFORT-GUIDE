import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const DownloadButton = ({ fort }) => {
    const generatePDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        let yPosition = 20;

        // Helper function to add text with word wrap
        const addText = (text, fontSize = 12, isBold = false) => {
            doc.setFontSize(fontSize);
            doc.setFont('helvetica', isBold ? 'bold' : 'normal');
            const lines = doc.splitTextToSize(text, pageWidth - 40);
            doc.text(lines, 20, yPosition);
            yPosition += (lines.length * fontSize * 0.5) + 5;
        };

        // Header with Maharashtra theme
        doc.setFillColor(255, 153, 51); // Saffron color
        doc.rect(0, 0, pageWidth, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('MahaFort Guide', pageWidth / 2, 20, { align: 'center' });
        doc.setFontSize(14);
        doc.text('Smart Heritage Tourism Platform', pageWidth / 2, 30, { align: 'center' });

        // Reset text color
        doc.setTextColor(0, 0, 0);
        yPosition = 50;

        // Fort Name
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text(fort.name, 20, yPosition);
        yPosition += 10;

        // Location
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`📍 ${fort.location.district}, Maharashtra`, 20, yPosition);
        yPosition += 15;

        // Crowd Status
        if (fort.crowdStatus) {
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(`Crowd Status: ${fort.crowdStatus}`, 20, yPosition);
            yPosition += 10;
        }

        // Description
        addText('About:', 14, true);
        addText(fort.description);
        yPosition += 5;

        // Visit Information
        if (fort.visitInfo) {
            addText('Visit Information:', 14, true);
            if (fort.visitInfo.entryFee !== undefined) {
                addText(`Entry Fee: ₹${fort.visitInfo.entryFee}`);
            }
            if (fort.visitInfo.timings) {
                addText(`Timings: ${fort.visitInfo.timings}`);
            }
            if (fort.visitInfo.difficulty) {
                addText(`Difficulty: ${fort.visitInfo.difficulty}`);
            }
            if (fort.visitInfo.timeRequired) {
                addText(`Time Required: ${fort.visitInfo.timeRequired}`);
            }
            yPosition += 5;
        }

        // Check if new page needed
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }

        // Trek Routes
        if (fort.trekDetails?.routes && fort.trekDetails.routes.length > 0) {
            addText('Trek Routes:', 14, true);
            fort.trekDetails.routes.forEach((route, index) => {
                addText(`${index + 1}. ${route.name}`, 12, true);
                addText(`   Distance: ${route.distance} | Duration: ${route.duration}`);
                addText(`   Difficulty: ${route.difficulty}`);
                if (route.description) {
                    addText(`   ${route.description}`);
                }
                yPosition += 3;
            });
            yPosition += 5;
        }

        // Emergency Contacts
        if (fort.emergencyContacts && fort.emergencyContacts.length > 0) {
            if (yPosition > 220) {
                doc.addPage();
                yPosition = 20;
            }

            addText('🚨 Emergency Contacts:', 14, true);
            fort.emergencyContacts.forEach((contact, index) => {
                addText(`${contact.type}: ${contact.name}`, 12, true);
                addText(`   Phone: ${contact.phone}`);
                addText(`   Available: ${contact.available}`);
                addText(`   Location: ${contact.location}`);
                yPosition += 3;
            });
            yPosition += 5;
        }

        // Accessibility
        if (fort.accessibility) {
            if (yPosition > 240) {
                doc.addPage();
                yPosition = 20;
            }

            addText('Accessibility Information:', 14, true);
            addText(`Wheelchair Accessible: ${fort.accessibility.wheelchairAccessible ? 'Yes' : 'No'}`);
            addText(`Elderly Friendly: ${fort.accessibility.elderlyFriendly ? 'Yes' : 'No'}`);
            if (fort.accessibility.stepsCount) {
                addText(`Steps Count: ${fort.accessibility.stepsCount}`);
            }
            if (fort.accessibility.notes) {
                addText(`Notes: ${fort.accessibility.notes}`);
            }
        }

        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(128, 128, 128);
            doc.text(
                `Generated by MahaFort Guide | Page ${i} of ${pageCount}`,
                pageWidth / 2,
                doc.internal.pageSize.getHeight() - 10,
                { align: 'center' }
            );
        }

        // Save PDF
        doc.save(`${fort.name.replace(/\s+/g, '_')}_Details.pdf`);
    };

    return (
        <button
            onClick={generatePDF}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
            <FaFilePdf className="text-xl" />
            <span>Download Fort Details</span>
            <FaDownload className="text-sm" />
        </button>
    );
};

export default DownloadButton;
