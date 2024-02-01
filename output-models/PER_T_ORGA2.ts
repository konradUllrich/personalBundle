import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_ORGA2Attributes {
    LUSERIDINSERT?: number;
    STR_EBENE2?: string;
    DTINSERT?: Date;
    STR_SORTIERUNG?: string;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    STRID: string;
}

@Table({
	tableName: "PER_T_ORGA2",
	timestamps: false 
})
export class PER_T_ORGA2 extends Model<PER_T_ORGA2Attributes, PER_T_ORGA2Attributes> implements PER_T_ORGA2Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EBENE2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}