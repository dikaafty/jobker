describe("Job Tracker", () => {
  beforeEach(() => {
    cy.visit("/job");
  });

  it("should add a job", () => {
    const job = {
      title: "Frontend Developer",
      url: "https://lamarjob.com/",
      location: "Jakarta, Indonesia",
      company: "Bagus AI",
      status: "Applied",
      dateApplied: "2025-09-11",
      deadline: "2025-10-01",
    };

    cy.contains("Add Job").click();
    cy.get("[data-testid='dialog']").should("be.visible");

    cy.findByLabelText(/job title/i).type(job.title).should("have.value", job.title);
    cy.findByLabelText(/job url/i).type(job.url).should("have.value", job.url);
    cy.findByLabelText(/job location/i).type(job.location).should("have.value", job.location);
    cy.findByLabelText(/company name/i).type(job.company).should("have.value", job.company);
    cy.findByLabelText(/status/i).select(job.status).should("have.value", job.status);
    cy.findByLabelText(/date applied/i).type(job.dateApplied).should("have.value", job.dateApplied);
    cy.findByLabelText(/deadline/i).type(job.deadline).should("have.value", job.deadline);

    cy.contains("Save Job").click();
    cy.get("[data-testid='dialog']").should("not.exist");
    cy.contains(job.title).should("be.visible");
  });
});