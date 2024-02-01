import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_T_ABP_MAAttributes {
    L_ANZAHLTAGEDEZ?: number;
    FKSTRID?: string;
    L_ANZAHLTAGEMRZ?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STRID: string;
    L_ANZAHLTAGEAPR?: number;
    REF_PLANUNGSSTATUS?: string;
    L_ANZAHLTAGEJUN?: number;
    REF_PERSONAL?: string;
    L_ANZAHLTAGEJUL?: number;
    LUSERID?: number;
    L_ANZAHLTAGEGESAMT?: number;
    L_ANZAHLTAGEOKT?: number;
    L_ANZAHLTAGESEP?: number;
    L_ANZAHLTAGENOV?: number;
    L_ANZAHLTAGEAUG?: number;
    REF_BENUTZER?: number;
    DTEDIT?: Date;
    L_ANZAHLTAGEFEB?: number;
    L_ANZAHLTAGEJAN?: number;
    L_ANZAHLTAGEMAI?: number;
}

@Table({
	tableName: "ABP_T_ABP_MA",
	timestamps: false 
})
export class ABP_T_ABP_MA extends Model<ABP_T_ABP_MAAttributes, ABP_T_ABP_MAAttributes> implements ABP_T_ABP_MAAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEDEZ?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEMRZ?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEAPR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PLANUNGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEJUN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEJUL?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEGESAMT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEOKT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGESEP?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGENOV?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEAUG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEFEB?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEJAN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLTAGEMAI?: number;

}