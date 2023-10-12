import "./Style/publicpages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./PublicPages/Home";
import About from "./PublicPages/About";
import CrmDashboard from "./User/CrmDashboard";
import Login from "./PublicPages/Login";
import Register from "./PublicPages/Register";
import Services from "./PublicPages/Services";
import Resources from "./PublicPages/Resources";
import Features from "./PublicPages/Features";
import Pricing from "./PublicPages/Pricing";
import Aerospace from "./PublicPages/Aerospace";
import Transport from "./PublicPages/Transport";
import Computer from "./PublicPages/Computer";
import Telecommunication from "./PublicPages/Telecommunication";
import Pharmaceutical from "./PublicPages/Pharmaceutical";
import Food from "./PublicPages/Food";
import Healthcare from "./PublicPages/Healthcare.jsx";
import Construction from "./PublicPages/Construction";
import Agriculture from "./PublicPages/Agriculture";
import Education from "./PublicPages/Education";
import Electronics from "./PublicPages/Electronics";
import Contact from "./PublicPages/Contact_Us";
import LandingPage from "./User/Landingpage";
import Communication from './PublicPages/Communication';
import CustomerServices from './PublicPages/CustomerServices';
import Promotions from './PublicPages/Promotions';
import CrmMarketing from './PublicPages/CrmMarketing';
import DegreeView from './PublicPages/360-Degree-View';
import DigitalMobile from './PublicPages/DigitalMobile';
import Planning from './PublicPages/Planning';
import Analytics from './PublicPages/Analytics';
import CrmAnalysis from './PublicPages/CrmAnalysis';
import DigitalMarketing from './PublicPages/DigitalMarketing';
import PrivacyPolicy from './PublicPages/PrivacyPolicy';
import OurStory from './PublicPages/OurStory';
import WhyChooseUs from './PublicPages/WhyChooseUs';
import TearmOfUse from './PublicPages/TermsOfUse';
import Lead from './PublicPages/LeadManagement';
import Inventory from './PublicPages/InventoryManagement';
import Process from './PublicPages/ProcessManagement';
import InvoiceManagement from './PublicPages/InvoiceManagement';
import ContactManagement from './PublicPages/ContactManagement';
import TaskManagement from './PublicPages/TaskManagement';
import SalesAutomation from './PublicPages/SalesAutomation';
import SalesForecasting from './PublicPages/SalesForecasting';
import DashboardAndReporting from './PublicPages/DashboardAndReporting';
import ProductivityAnalysis from './PublicPages/ProductivityAnalysis';
import EmailIntegration from './PublicPages/EmailIntegration';
import OpportunityManagement from './PublicPages/OpportunityManagement';
import ChoosingRightCRM from './PublicPages/ChoosingRightCRM'; 
import CoreCRMFeatures from './PublicPages/CoreCRMFeatures';
import OptionalCRMFeatures from './PublicPages/OptionalCRMFeatures';
import CommonCRMFeatures from './PublicPages/CommonCRMFeatures';
import StableGrowth from './PublicPages/StableGrowth';
import ImprovedCommunication from './PublicPages/ImprovedCommunication';
import Survey from './PublicPages/Survey';
import CompetitorAnalysis from './PublicPages/CompetitorAnalysis';
import Risk from './PublicPages/Risk';
import Docmangement from './PublicPages/Docmangement';
import WorkFlowManagement from './PublicPages/WorkFlowManagement';
import ExpandBusiness from './PublicPages/ExpandBusiness';
import CampaignManagement from './PublicPages/CampaignManagement';
import StrongConnection from './PublicPages/StrongConnection';
import DBIntigration from './PublicPages/DBIntigration';
import OperationalManagement from './PublicPages/OperationalManagement';
import CatalogSync from './PublicPages/CatalogSync';
import SalesGoals from './PublicPages/SalesGoals';
import PredictiveAnalystics from './PublicPages/PredictiveAnalystics';    
import CreateTask from "./User/Sections/CreateTask";
import NewCustomer from "./User/Sections/NewCustomer";
import NewVendor from "./User/Sections/NewVendor";
import NewLead from "./User/Sections/NewLead";
import CustomerDashboard from "./User/Sections/CustomerDashboard";
import BusinessAppointments from "./User/Sections/BusinessAppointments";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="crmdashboard" element={<CrmDashboard/>} />
          <Route path="login"  element={<Login/>} />
          <Route path="contact_us" element={<Contact/>} />
          <Route path="register" element={<Register/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="resources" element={<Resources/>} />
          <Route path="features" element={<Features/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="aerospace" element={<Aerospace/>} />
          <Route path="transport" element={<Transport/>} />
          <Route path="computer" element={<Computer/>} />
          <Route path="telecommunication" element={<Telecommunication/>} />
          <Route path="pharmaceutical" element={<Pharmaceutical/>} />
          <Route path="food" element={<Food/>} />
          <Route path="healthcare" element={<Healthcare/>} />
          <Route path="construction" element={<Construction/>} />
          <Route path="agriculture" element={<Agriculture/>} />
          <Route path="education" element={<Education/>} />
          <Route path="electronics" element={<Electronics/>} />
          <Route path="communication" element={<Communication/>} />
          <Route path="customer-services" element={<CustomerServices/>} />
          <Route path="promotions" element={<Promotions/>} />
          <Route path="crmmarketing" element={<CrmMarketing/>} />
          <Route path="360degreeview" element={<DegreeView/>} />
          <Route path="digitalmobile" element={<DigitalMobile/>} />
          <Route path="planning" element={<Planning/>} />
          <Route path="crm_analysis" element={<CrmAnalysis/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="digitalmarketing" element={<DigitalMarketing/>} />
          <Route path="privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="ourstory" element={<OurStory/>} />
          <Route path="whychooseus" element={<WhyChooseUs/>} />
          <Route path="termsofuse" element={<TearmOfUse/>} />
          <Route path="leadmanagement" element={<Lead/>} />
          <Route path="inventorymanagement" element={<Inventory/>} />
          <Route path="processmanagement" element={<Process/>} />
          <Route path="invoicemanagement" element={<InvoiceManagement/>} />
          <Route path="contactmanagement" element={<ContactManagement/>} />
          <Route path="taskmanagement" element={<TaskManagement/>} />
          <Route path="salesautomation" element={<SalesAutomation/>} />
          <Route path="salesforecasting" element={<SalesForecasting/>} />
          <Route path="dashboardandreporting" element={<DashboardAndReporting/>} />
          <Route path="productivityanalysis" element={<ProductivityAnalysis/>} />
          <Route path="emailintegration" element={<EmailIntegration/>} />
          <Route path="opportunitymanagement" element={<OpportunityManagement/>} />
          <Route path="choosingrightcrm" element={<ChoosingRightCRM/>} />
          <Route path="corecrmfeatures" element={< CoreCRMFeatures/>} />
          <Route path="optionalcrmfeatures" element={<OptionalCRMFeatures/>} />
          <Route path="commoncrmfeatures" element={<CommonCRMFeatures/>} />
          <Route path="stablegrowth" element={<StableGrowth/>} />
          <Route path="improvedcommunication" element={<ImprovedCommunication/>} />
          <Route path="survey" element={<Survey/>} />
          <Route path="competitoranalysis" element={<CompetitorAnalysis/>} />
          <Route path="risk" element={<Risk/>} />
          <Route path="docmangement" element={<Docmangement/>} />
          <Route path="workflowmanagement" element={<WorkFlowManagement/>} />
          <Route path="expandbusiness" element={<ExpandBusiness/>} />
          <Route path="campaignmanagement" element={<CampaignManagement/>} />
          <Route path="strongconnection" element={<StrongConnection/>} />
          <Route path="dbintigration" element={<DBIntigration/>} />
          <Route path="operationalmanagement" element={<OperationalManagement/>} />
          <Route path="catalogsync" element={<CatalogSync/>} />
          <Route path="salesgoals" element={<SalesGoals/>} />
          <Route path="predictiveanalystics" element={<PredictiveAnalystics/>} />


          <Route path="landingpage" element={<LandingPage/>} />
          <Route path="customer-dashboard" element={<CustomerDashboard/>}/>
          <Route path="create-task" element={<CreateTask/>}/>
          <Route path="new-customer" element={<NewCustomer/>}/>
          <Route path="new-vendor" element={<NewVendor/>}/>
          <Route path="new-lead" element={<NewLead/>}/>
          <Route path="business-registration" element={<BusinessAppointments/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
