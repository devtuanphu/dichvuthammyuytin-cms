import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_hero_sections';
  info: {
    displayName: 'About Hero Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_sections';
  info: {
    displayName: 'Benefits Section';
    icon: 'check';
  };
  attributes: {
    benefits_list: Schema.Attribute.Component<'shared.stat', true>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCertificationsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_certifications_sections';
  info: {
    displayName: 'Certifications Section';
    icon: 'award';
  };
  attributes: {
    certifications: Schema.Attribute.Component<'shared.stat', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
    icon: 'mail';
  };
  attributes: {
    form_description: Schema.Attribute.Text;
    form_title: Schema.Attribute.String;
    map_address: Schema.Attribute.String;
    map_embed_url: Schema.Attribute.Text;
  };
}

export interface SectionsContactHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_hero_sections';
  info: {
    displayName: 'Contact Hero Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_info_sections';
  info: {
    displayName: 'Contact Info Section';
    icon: 'phone';
  };
  attributes: {
    info_cards: Schema.Attribute.Component<'shared.contact_info_card', true>;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'bullhorn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDoctorsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_doctors_sections';
  info: {
    displayName: 'Doctors Section';
    icon: 'users';
  };
  attributes: {
    description: Schema.Attribute.Text;
    doctors: Schema.Attribute.Component<'shared.doctor_card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'help-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'shared.faq_item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'star';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'C\u00F4ng ngh\u1EC7 Laser hi\u1EC7n \u0111\u1EA1i nh\u1EA5t'>;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    phone: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_hero_sections';
  info: {
    displayName: 'News Hero Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_sections';
  info: {
    displayName: 'Process Section';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<'shared.step', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesDetailSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_detail_sections';
  info: {
    displayName: 'Services Detail Section';
    icon: 'list';
  };
  attributes: {
    services: Schema.Attribute.Component<'shared.service_detail_card', true>;
  };
}

export interface SectionsServicesHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_hero_sections';
  info: {
    displayName: 'Services Hero Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'Services Section';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'shared.service_card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_sections';
  info: {
    displayName: 'Story Section';
    icon: 'book';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    icon: 'comment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_sections';
  info: {
    displayName: 'Values Section';
    icon: 'check-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.value_card', true>;
  };
}

export interface SharedContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_cards';
  info: {
    displayName: 'Contact Info Card';
    icon: 'info';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDoctorCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_doctor_cards';
  info: {
    displayName: 'Doctor Card';
    icon: 'user';
  };
  attributes: {
    experience: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    specialty: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'help-circle';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedFooterCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_company_infos';
  info: {
    displayName: 'Footer Company Info';
    icon: 'building';
  };
  attributes: {
    description: Schema.Attribute.Text;
    facebook_url: Schema.Attribute.String;
    instagram_url: Schema.Attribute.String;
  };
}

export interface SharedFooterContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_contact_infos';
  info: {
    displayName: 'Footer Contact Info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
    working_hours: Schema.Attribute.Text;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedFooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_quick_links';
  info: {
    displayName: 'Footer Quick Links';
    icon: 'link';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.footer_link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_services';
  info: {
    displayName: 'Footer Services';
    icon: 'star';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.footer_link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'file-text';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'Service Card';
    icon: 'briefcase';
  };
  attributes: {
    color_gradient: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceDetailCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_detail_cards';
  info: {
    displayName: 'Service Detail Card';
    icon: 'briefcase';
  };
  attributes: {
    color_gradient: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'shared.stat', true>;
    duration: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    price: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'chart-pie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Step';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    step_number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'comment';
  };
  attributes: {
    age: Schema.Attribute.Integer;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface SharedValueCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_value_cards';
  info: {
    displayName: 'Value Card';
    icon: 'award';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about_hero_section': SectionsAboutHeroSection;
      'sections.benefits_section': SectionsBenefitsSection;
      'sections.certifications_section': SectionsCertificationsSection;
      'sections.contact_form_section': SectionsContactFormSection;
      'sections.contact_hero_section': SectionsContactHeroSection;
      'sections.contact_info_section': SectionsContactInfoSection;
      'sections.cta_section': SectionsCtaSection;
      'sections.doctors_section': SectionsDoctorsSection;
      'sections.faq_section': SectionsFaqSection;
      'sections.hero_section': SectionsHeroSection;
      'sections.news_hero_section': SectionsNewsHeroSection;
      'sections.process_section': SectionsProcessSection;
      'sections.services_detail_section': SectionsServicesDetailSection;
      'sections.services_hero_section': SectionsServicesHeroSection;
      'sections.services_section': SectionsServicesSection;
      'sections.story_section': SectionsStorySection;
      'sections.testimonials_section': SectionsTestimonialsSection;
      'sections.values_section': SectionsValuesSection;
      'shared.contact_info_card': SharedContactInfoCard;
      'shared.doctor_card': SharedDoctorCard;
      'shared.faq_item': SharedFaqItem;
      'shared.footer_company_info': SharedFooterCompanyInfo;
      'shared.footer_contact_info': SharedFooterContactInfo;
      'shared.footer_link': SharedFooterLink;
      'shared.footer_quick_links': SharedFooterQuickLinks;
      'shared.footer_services': SharedFooterServices;
      'shared.paragraph': SharedParagraph;
      'shared.seo': SharedSeo;
      'shared.service_card': SharedServiceCard;
      'shared.service_detail_card': SharedServiceDetailCard;
      'shared.stat': SharedStat;
      'shared.step': SharedStep;
      'shared.testimonial': SharedTestimonial;
      'shared.value_card': SharedValueCard;
    }
  }
}
