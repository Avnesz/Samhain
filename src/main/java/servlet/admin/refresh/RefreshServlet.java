package servlet.admin.refresh;

import java.io.IOException;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralResponse;

/**
 * Controller d'administration permettant de rafraichir le contexte de l'application
 * 
 * @author Snes
 * 
 */
public class RefreshServlet extends AbstractServlet<String, GeneralResponse> {
    private static final long serialVersionUID = -4647019705021722992L;

    @Override
    protected GeneralResponse doGet(final String request) throws ServletException, IOException {
        return null;
    }

    @Override
    protected GeneralResponse doPost(final String request) throws ServletException, IOException {
        final GeneralResponse response = new GeneralResponse();
        response.setCodeRetour(0);
        response.setMessage("Le site a ete rafraichie avec les nouvelles donnees");
        return response;
    }

    @Override
    protected String getRequest(final String data) {
        return null;
    }

}