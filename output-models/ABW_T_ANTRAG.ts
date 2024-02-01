import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABW_T_ANTRAGAttributes {
    TXT_BEGRUENDUNG?: string;
    DTINSERT?: Date;
    DT_ANTRAGSDATUM?: Date;
    TXT_BEMERKUNGSTELLVERTRETUNG?: string;
    DT_BIS?: Date;
    STR_ANTRAGSTELLERIN?: string;
    B_IPV?: boolean;
    STRID: string;
    STR_BEGRUENDUNGKEINESTELLVERTR?: string;
    B_KEINEFACHVORGESETZTER?: boolean;
    REF_FK_BENUTZER?: number;
    STR_BEGRUENDUNGKEINEFACHVORGES?: string;
    REF_ANTRAGSSTATUS?: string;
    REF_BL?: string;
    REF_STELLVERTRETERIN?: number;
    REF_PERSONAL?: string;
    STR_STELLVERTRETERIN?: string;
    DTEDIT?: Date;
    B_KEINESTELLVERTRETERIN?: boolean;
    LUSERIDINSERT?: number;
    FLT_ANZAHLTAGE?: number;
    REF_FK_PERSONAL?: string;
    REF_FACHVORGESETZTE?: number;
    STR_BEGRUENDUNGSTORNO?: string;
    REF_STATUS_SV?: string;
    REF_STATUS_FV?: string;
    STR_VERSION?: string;
    B_VERSION?: boolean;
    REF_ABWESENHEITSART?: string;
    L_FILEINFORMATION?: number;
    STR_FACHVORGESETZTER?: string;
    DT_VON?: Date;
    LUSERID?: number;
    REF_ANTRAGSTELLERIN?: number;
    TXT_BEMERKUNGFACHVORGESETZTER?: string;
    L_VERSION?: number;
    TXT_BEGRUENDUNGFUERKORREKTUR?: string;
    L_ANTRAGSTELLERIN?: number;
    L_FILEINFORMATION_1?: number;
    L_FILEINFORMATION_2?: number;
    DT_BIS2?: Date;
}

@Table({
	tableName: "ABW_T_ANTRAG",
	timestamps: false 
})
export class ABW_T_ANTRAG extends Model<ABW_T_ANTRAGAttributes, ABW_T_ANTRAGAttributes> implements ABW_T_ANTRAGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEGRUENDUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ANTRAGSDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGSTELLVERTRETUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSTELLERIN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IPV?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEGRUENDUNGKEINESTELLVERTR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KEINEFACHVORGESETZTER?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FK_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEGRUENDUNGKEINEFACHVORGES?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ANTRAGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_STELLVERTRETERIN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLVERTRETERIN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KEINESTELLVERTRETERIN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_ANZAHLTAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FK_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FACHVORGESETZTE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEGRUENDUNGSTORNO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STATUS_SV?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STATUS_FV?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERSION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_VERSION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ABWESENHEITSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FACHVORGESETZTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_ANTRAGSTELLERIN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGFACHVORGESETZTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VERSION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEGRUENDUNGFUERKORREKTUR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANTRAGSTELLERIN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_2?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BIS2?: Date;

}