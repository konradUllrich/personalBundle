import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_KAT_SETTINGSAttributes {
    STR_NAME?: string;
    B_AKTIV?: boolean;
    L_FILEINFORMATION_1?: number;
    L_FILEINFORMATION?: number;
    STR_VISOBJEKTURL?: string;
    DTINSERT?: Date;
    STR_KONTO?: string;
    STRID: string;
    LUSERID?: number;
    STR_PRIVATEKEYPASSWORD?: string;
    STR_URI?: string;
    TXT_EMAILADRESSENBEIFEHLER?: string;
    DTEDIT?: Date;
    STR_MANDANTENIDVIS?: string;
    STR_VISPASSWORT?: string;
    L_TAGELOESCHDATUM?: number;
    STR_VISURL?: string;
    STR_VISUSER?: string;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "BIXV_KAT_SETTINGS",
	timestamps: false 
})
export class BIXV_KAT_SETTINGS extends Model<BIXV_KAT_SETTINGSAttributes, BIXV_KAT_SETTINGSAttributes> implements BIXV_KAT_SETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_AKTIV?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VISOBJEKTURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KONTO?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVATEKEYPASSWORD?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_URI?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EMAILADRESSENBEIFEHLER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MANDANTENIDVIS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VISPASSWORT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_TAGELOESCHDATUM?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VISURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VISUSER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}