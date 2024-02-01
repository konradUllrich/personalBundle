import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_KAT_KATEGORIENAttributes {
    B_BILDER?: boolean;
    STR_REIHENFOLGE?: string;
    B_STANDARDAUSSTATTUNGKONFIGURI?: boolean;
    DTEDIT?: Date;
    B_BESTUHLUNG?: boolean;
    LUSERID?: number;
    B_STANDORT?: boolean;
    L_FILEINFORMATION?: number;
    B_SORTIERUNG?: boolean;
    L_FILEINFORMATION_1?: number;
    TXT_ZUGRIFFSBERECHTIGUNG?: string;
    B_RAUM?: boolean;
    B_EQUIPMENTAUSSTATTUNG?: boolean;
    B_GENEHMIGUNGERFORDERLICH?: boolean;
    B_ZUSAETZLICHESEQUIPMENTKONFIG?: boolean;
    B_RESERVIERBARDURCHKONFIGURIER?: boolean;
    STR_KATEGORIE?: string;
    LUSERIDINSERT?: number;
    B_ETAGE?: boolean;
    B_INVENTARNUMMER?: boolean;
    DTINSERT?: Date;
    STR_TARGETGUID?: string;
    STRID: string;
}

@Table({
	tableName: "CAL_KAT_KATEGORIEN",
	timestamps: false 
})
export class CAL_KAT_KATEGORIEN extends Model<CAL_KAT_KATEGORIENAttributes, CAL_KAT_KATEGORIENAttributes> implements CAL_KAT_KATEGORIENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BILDER?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REIHENFOLGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDAUSSTATTUNGKONFIGURI?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BESTUHLUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDORT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SORTIERUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ZUGRIFFSBERECHTIGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_RAUM?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EQUIPMENTAUSSTATTUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GENEHMIGUNGERFORDERLICH?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ZUSAETZLICHESEQUIPMENTKONFIG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_RESERVIERBARDURCHKONFIGURIER?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ETAGE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INVENTARNUMMER?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TARGETGUID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}