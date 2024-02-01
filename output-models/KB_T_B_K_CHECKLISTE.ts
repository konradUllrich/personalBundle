import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_CHECKLISTEAttributes {
    LUSERID?: number;
    L_ORDER?: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    TXT_BESCHREIBUNG?: string;
    DTEDIT?: Date;
    STR_REIHENFOLGEALT?: string;
    LUSERIDINSERT?: number;
    DT_TERMIN?: Date;
    STRID: string;
    STR_ITEM?: string;
    B_ERLEDIGT?: boolean;
}

@Table({
	tableName: "KB_T_B_K_CHECKLISTE",
	timestamps: false 
})
export class KB_T_B_K_CHECKLISTE extends Model<KB_T_B_K_CHECKLISTEAttributes, KB_T_B_K_CHECKLISTEAttributes> implements KB_T_B_K_CHECKLISTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REIHENFOLGEALT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TERMIN?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ITEM?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ERLEDIGT?: boolean;

}