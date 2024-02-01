import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_STATUSAttributes {
    STR_STATUS?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_KATEGORIE?: string;
    STR_ID?: string;
    FKSTRID?: string;
    STR_SORTIERUNG?: string;
    L_FILEINFORMATION?: number;
    LUSERID?: number;
    STR_CSSFILTER?: string;
    DTEDIT?: Date;
    B_SYSTEMSTATUS?: boolean;
}

@Table({
	tableName: "KB_T_B_STATUS",
	timestamps: false 
})
export class KB_T_B_STATUS extends Model<KB_T_B_STATUSAttributes, KB_T_B_STATUSAttributes> implements KB_T_B_STATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CSSFILTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SYSTEMSTATUS?: boolean;

}